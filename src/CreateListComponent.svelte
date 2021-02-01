<script lang="ts">
    import { writable } from "svelte/store";
    import AddItem from "./AddItem.svelte";
    import Api from "./data/api";
    import type ListItem from "./models/ListItem";
    import type ShoppingList from "./models/ShoppingList";

    let name: string;
    let listItemStore = writable<ListItem[]>([
        { item: null, amount: null, cost: null },
    ]);

    async function handleOnSubmit() {
        let shoppingList: ShoppingList = {
            name: name,
            items: $listItemStore,
        };

        console.log(await Api.createList(shoppingList));
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
