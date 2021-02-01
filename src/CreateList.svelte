<script lang="ts">
    import { writable } from "svelte/store";
    import AddItem from "./AddItem.svelte";
    import type ListItem from "./models/ListItem";
    import type ShoppingList from "./models/ShoppingList";
    /*TODO: support multiple AddItem components
      Use items[index].items instead of local listItem? 
      Probably needs a Svelte Store?*/

    let listItemStore = writable({});
    $listItemStore = [{ item: null, amount: null, cost: null }];
    let name: string;
    let listItems: Array<ListItem> = [{ item: null, amount: null, cost: null }];

    function handleOnSubmit() {
        let shoppingList: ShoppingList = {
            name: name,
            items: listItems,
        };

        console.log(shoppingList);
    }

    function addItemComponent() {
        //@ts-ignore -- this actually works
        let len = $listItemStore.length;
        $listItemStore[len] = { item: null, amount: null, cost: null };
    }
</script>

<form on:submit|preventDefault={handleOnSubmit}>
    <label>
        <input type="text" bind:value={name} />

        {#each $listItemStore as _, index}
            <AddItem bind:listItem={listItems[index]} />
        {/each}
        <button on:click={addItemComponent} />
    </label>
</form>
