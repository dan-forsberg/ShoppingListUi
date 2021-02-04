<script lang="ts">
    import type ListItem from './models/ListItem';
    import type ShoppingList from './models/ShoppingList';
    import Api from './data/api';

    export let item: ListItem;
    export let list: ShoppingList;
    export let itemRemoved: (item: ListItem) => any;

    async function removeItem() {
        try {
            let result = await Api.deleteItem(list, item);
            console.log(result);
            itemRemoved(item);
        } catch (ex) {
            console.error('Could not delete item');
            console.error(ex);
        }
    }

    async function toggleBought() {
        try {
            // results are boring
            await Api.toggleItemBought(list, item);
            // show a toast?
        } catch (ex) {
            console.error('Could not toggle itemBought');
            console.error(ex);
        }
    }

    let itemBought = item.bought;
</script>

<div class="list-item {itemBought ? 'strikethrough' : ''}">
    <input autocomplete="off" type="checkbox" bind:checked={itemBought} on:change={toggleBought} />

    <span>
        {#if item.amount}
            <span class="amount">{item.amount}st</span>
        {/if}
        {item.item}
        {#if item.price}
            <span class="price">för {item.price} kr</span>
        {/if}
    </span>

    <button on:click={removeItem}>X</button>
</div>

<style>
    .strikethrough span {
        text-decoration: line-through;
        color: #888;
    }

    .list-item {
        display: block;
        width: 100%;
    }

    button {
        border: none;
        background-color: white;
        height: 10px;
        position: relative;
        right: 0px;
    }
</style>
