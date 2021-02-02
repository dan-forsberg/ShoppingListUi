<script lang="ts">
    import Api from "./data/api";
    import ListItem from "./ListItem.svelte";
    import { fade } from "svelte/transition";
    import { ListStore } from "./data/stores/listStore";
    import type ShoppingList from "./models/ShoppingList";

    export let list: ShoppingList;

    const deleteList = async () => {
        const result = await Api.deleteList(list);
        if (result.message === "List deleted.") {
            let index = $ListStore.indexOf(list);
            $ListStore.splice(index, 1);
            ListStore.set($ListStore);
        }
    };

    const editList = async () => {

    }

    const delete_emoji = "🗑️";
    const pencil_emoji = "✏️";
</script>

<div in:fade out:fade>
    <h3>
        {list.name.toUpperCase()}
        <button on:click={editList}>{pencil_emoji}</button>
        <button on:click={deleteList}>{delete_emoji}</button>
    </h3>
    <ul>
        {#each list.items as item (item._id)}
            <li in:fade out:fade>
                <ListItem {item} />
            </li>
        {/each}
    </ul>
</div>

<style>
    div {
        width: 280px;
    }
    button {
        border: none;
        background-color: white;
        float: right;
    }
    ul {
        list-style-type: none;
    }
</style>
