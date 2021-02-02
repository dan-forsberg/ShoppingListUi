<script lang="ts">
    import AddItem from "./AddItem.svelte";
    import Api from "./data/api";
    import type ShoppingList from "./models/ShoppingList";
    import { listItemStore } from "./data/stores/listItemStore";
    import { listStore } from "./data/stores/listStore";

    let name: string;
    async function handleOnSubmit() {
        let shoppingList:ShoppingList = {
            name: name,
            items: $listItemStore
        };

        try {
            let createdList = await Api.createList(shoppingList);
            let listLen = $listStore.length;
            $listStore[listLen] = createdList;
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
    <button type="button" on:click={addItemComponent}>Lägg till fält!</button>
    <button type="submit">Skicka lista!</button>
</form>
