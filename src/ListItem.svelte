<script lang="ts">
    import type ListItem from "./models/ListItem";
    export let item: ListItem;
    export let removeItem: (item: ListItem) => any;
</script>
{item.item}
{#if item.amount}
    {item.amount}
{/if}
{#if item.cost}
    {item.cost}
{/if}
<button on:click={() => removeItem(item)}>X</button>

<style>
    button {
        float: right;
    }
</style>