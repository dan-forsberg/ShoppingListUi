<script lang="ts">
    import Api from './data/api';
    import type ListItem from './models/ListItem';
    import ListItemComponent from './ListItem.svelte';
    import { ListStore } from './data/stores/listStore';
    import type ShoppingList from './models/ShoppingList';
    import AddItem from './AddItem.svelte';

    let addItem = false;
    let newItem: ListItem;

    export let list: ShoppingList;

    const deleteList = async () => {
        const result = await Api.deleteList(list);
        if (result.message === 'List deleted.') {
            let index = $ListStore.indexOf(list);
            $ListStore.splice(index, 1);
            ListStore.set($ListStore);
        }
    };

    const itemRemoved = (item: ListItem) => {
        const index = list.items.indexOf(item);
        list.items.splice(index, 1);
        // force Svelte to update
        list = list;
    };

    const addItemToList = async () => {
        try {
            console.log(newItem);
            const result = await Api.addItemToList(list, newItem);
            console.log(result);
        } catch (ex) {
            console.error(ex);
        }
    };

    const delete_emoji = '🗑️';
</script>

<div class="lists-container">
    <h3>
        {list.name.toUpperCase()}
        <button class="delete-list" on:click={deleteList}>{delete_emoji}</button>
    </h3>
    {#each list.items as item (item._id)}
        <ListItemComponent {item} {list} {itemRemoved} />
    {/each}

    {#if !addItem}
        <div class="add-item">
            <button
                on:click={() => {
                    addItem = !addItem;
                }}>Lägg till</button
            >
        </div>
    {:else}
        <AddItem listItem={newItem} />
        <button>+</button>
        <button on:click={addItemToList}>Spara</button>
    {/if}
</div>

<style>
    .lists-container {
        width: 280px;
    }

    button {
        border: none;
        background-color: white;
    }

    .delete-list {
        float: right;
    }

    .add-item {
        display: block;
    }
</style>
