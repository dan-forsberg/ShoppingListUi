<script lang="ts">
    import type ListItem from "./models/ListItem";

    export let item: ListItem;
</script>

{item.item}
{#if item.amount}
    {item.amount}
{/if}
{#if item.cost}
    {item.cost}
{/if}
