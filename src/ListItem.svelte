<script lang="ts">
    import type ListItem from './models/ListItem';
    import Api from './data/api';

    export let item: ListItem;
    export let removeItem: (item: ListItem) => any;

    let itemBought = item.bought;

    async function toggleItemAsBought() {
        itemBought = !itemBought;
    }

    console.log(item);
</script>

<div class="list-item {itemBought ? 'strikethrough' : ''}">
    <input autocomplete="off" type="checkbox" bind:checked={itemBought} />

    <span>
        {#if item.amount}
            <span class="amount">{item.amount}st</span>
        {/if}
        {item.item}
        {#if item.price}
            <span class="price">för {item.price} kr</span>
        {/if}
    </span>

    <button on:click={() => removeItem(item)}>X</button>
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
