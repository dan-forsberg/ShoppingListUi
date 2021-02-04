<script lang="ts">
    import Api from "./data/api";
    import type ListItem from "./models/ListItem";
    import { ListStore } from "./data/stores/listStore";
    import type ShoppingList from "./models/ShoppingList";
    import ListItemComponent from "./ListItem.svelte";

    export let list: ShoppingList;

    const deleteList = async () => {
        const result = await Api.deleteList(list);
        if (result.message === "List deleted.") {
            let index = $ListStore.indexOf(list);
            $ListStore.splice(index, 1);
            ListStore.set($ListStore);
        }
    };

    const editList = async () => {};

    const removeItem = async (listItem: ListItem) => {
        const result = await Api.deleteItem(list, listItem);
        console.log(result);
    };

    const delete_emoji = "🗑️";
    const pencil_emoji = "✏️";
</script>

<div class="lists-container">
    <h3>
        {list.name.toUpperCase()}
        <button on:click={editList}>{pencil_emoji}</button>
        <button on:click={deleteList}>{delete_emoji}</button>
    </h3>
    {#each list.items as item (item._id)}
        <ListItemComponent {item} removeItem={removeItem} />
    {/each}
</div>

<style>
    .lists-container {
        width: 280px;
    }

    button {
        border: none;
        background-color: white;
        float: right;
    }
</style>
