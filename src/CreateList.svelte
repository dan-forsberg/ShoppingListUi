<script lang="ts">
    import AddItem from "./AddItem.svelte";
    import type ListItem from "./models/ListItem";
    import type ShoppingList from "./models/ShoppingList";
    let name: string;
    let items: Array<ListItem> = [];
    let itemsLength: number = items.length + 1;
    let listItem:ListItem;

    function constructItems() {}

    function handleOnSubmit() {
        constructItems();

        let shoppingList: ShoppingList = {
            name: name,
            items: items,
        };
    }

    function addItemComponent() {
        console.log(listItem);
    }
</script>

<form on:submit|preventDefault={handleOnSubmit}>
    <label>
        <input type="text" bind:value={name} />
        <AddItem bind:listItem={listItem}/>
        <button on:click={addItemComponent} />
    </label>
</form>
