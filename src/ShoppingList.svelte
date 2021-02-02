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
</script>

<div in:fade out:fade>
    <ul>
        <h3>{list.name}</h3>
        <button on:click={deleteList}>Delete</button>
        {#each list.items as item (item._id)}
            <li><ListItem {item} /></li>
        {/each}
    </ul>
</div>
