<script lang="ts">
    import Api from "./data/api";
    import type ListItem from "./models/ListItem";
    import { ListStore } from "./data/stores/listStore";
    import type ShoppingList from "./models/ShoppingList";
    import ListItemComponent from "./ListItem.svelte";

    export let list: ShoppingList;
    export let collapsed: boolean = false;

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
    }

    const delete_emoji = "🗑️";
    const pencil_emoji = "✏️";
</script>

<div class="lists-container">
    <h3>
        {list.name.toUpperCase()}
        <!-- if only this list is show, show the delete and edit button -->
        {#if !collapsed}
            <button on:click={editList}>{pencil_emoji}</button>
            <button on:click={deleteList}>{delete_emoji}</button>
        {/if}
    </h3>
    <ul>
        {#if collapsed && list.items.length > 2}
            <div class="fader">
                <li><ListItemComponent item={list.items[0]} removeItem={removeItem} /></li>
                <li><ListItemComponent item={list.items[1]} removeItem={removeItem}/></li>
            </div>
        {:else}
            {#each list.items as item (item._id)}
                <li>
                    <ListItemComponent {item} removeItem={removeItem} />
                </li>
            {/each}
        {/if}
    </ul>
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

    ul {
        list-style-type: none;
    }

    .fader {
        mask-image: linear-gradient(to bottom, white 25%, transparent 100%);
    }
</style>
