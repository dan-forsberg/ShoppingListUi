<script lang="ts">
    import AddItem from "./AddItem.svelte";
    import Api from "./data/api";
    import {listItemStore} from "./data/stores/listItemStore";
    import type ShoppingList from "./models/ShoppingList";

    let name;
    async function handleOnSubmit() {
        let shoppingList: ShoppingList = {
            name: name,
            items: $listItemStore,
        };

        console.log(shoppingList);
        
        try {
            let createdList = await Api.createList(shoppingList);
            // show a toast or something?
        } catch (ex) {
            // show a toast or something
            console.error(ex);
        }
    }

    function addItemComponent() {
        let len = $listItemStore.length;
        $listItemStore[len] = { item: null, amount: null, cost: null };
    }
</script>

<form on:submit|preventDefault={handleOnSubmit}>
    <input placeholder="Inköpslista" type="text" bind:value={name} />
    {#each $listItemStore as _, index}
        <AddItem bind:listItem={$listItemStore[index]} />
    {/each}
    <input type="submit" />
</form>

<button on:click={addItemComponent} />
