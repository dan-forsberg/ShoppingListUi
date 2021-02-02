<script lang="ts">
    import ListItem from "./ListItem.svelte";
    import type ShoppingList from "./models/ShoppingList";
    import Api from "./data/api";
    import { listStore } from "./data/stores/listStore";
    import { fade } from "svelte/transition";

    export let list: ShoppingList;

    const deleteList = async () => {
        const result = await Api.deleteList(list);
        if (result.message === "List deleted.") {
            let index = $listStore.indexOf(list);
            $listStore.splice(index, 1);
            listStore.set($listStore);
        }
    };

    const delete_emoji = '🗑️';
</script>

<div in:fade out:fade>
    <h3>
        {list.name.toUpperCase()}
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
        width: 300px;
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
