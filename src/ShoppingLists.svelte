<script lang="ts">
    import ShoppingList from './ShoppingList.svelte';
    import { ListStore, ListStoreState } from './data/stores/listStore';
</script>

{#if $ListStoreState === 'UNFETCHED'}
    <p>Hämtar handlingslistor...</p>
{:else if $ListStoreState === 'FETCHED'}
    {#each $ListStore as list (list._id)}
        <ShoppingList {list} />
    {/each}
{:else}
    <p>Hoppsan, något har visst gått jättefel.</p>
{/if}

<style>
</style>
