<script lang="ts">
    import type ListItem from "./models/ListItem";
    export let item: ListItem;
    export let removeItem: (item: ListItem) => any;
</script>

<div class="list-item">
    <b>{item.item}</b>
    <div class="list-item-right">
        {#if item.amount}
            <span class="amount">{item.amount}</span>
        {/if}
        {#if item.cost}
            <span class="cost">{item.cost}</span>
        {/if}
        <button on:click={() => removeItem(item)}>X</button>
    </div>
</div>

<style>
    .list-item {
        display: block;
        width: 100%;
    }

    .list-item * {
        display:inline-block;
    }

    b {
        margin-left: 0;
        margin-right: auto;
    }
    
    .list-item-right {
        margin-right: 0;
        margin-left: auto;
    }

    button {
        order: 4;
        border: none;
        background-color: white;
        height: 10px;
        position: relative;
        right: 0px;
    }
</style>