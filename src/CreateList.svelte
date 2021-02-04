<script lang="ts">
    import AddItem from './AddItem.svelte';
    import Api from './data/api';
    import type ShoppingList from './models/ShoppingList';
    import type ListItem from './models/ListItem';
    import { ListStore } from './data/stores/listStore';

    let listItems: Array<ListItem> = [{ item: null, price: null, bought: false }];
    let name: string;
    async function handleOnSubmit() {
        let shoppingList: ShoppingList = {
            name: name,
            items: listItems,
        };

        try {
            let createdList = await Api.createList(shoppingList);
            if (createdList.message) {
                throw new Error('Could not create list: ' + createdList.message);
            }

            let listLen = $ListStore.length;
            $ListStore[listLen] = createdList.list;
            // show a toast or something?
        } catch (ex) {
            // show a toast or something
            console.error(ex);
        }
    }

    function addItemComponent() {
        let len = listItems.length;
        listItems[len] = { item: null, price: null, bought: false };
        console.log(listItems);
    }
</script>

<form on:submit|preventDefault={handleOnSubmit}>
    <input placeholder="Inköpslista" type="text" bind:value={name} />
    {#each listItems as _, index}
        <AddItem bind:listItem={listItems[index]} />
    {/each}
    <button type="button" on:click={addItemComponent}>Lägg till fält!</button>
    <button type="submit">Skicka lista!</button>
</form>
