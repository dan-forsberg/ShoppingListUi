<script lang="ts">
    import ShoppingListComponent from "./ShoppingList.svelte";
    import {ListStore, ListStoreState} from "./data/stores/listStore";
</script>

{#if $ListStoreState === "UNFETCHED"}
    <p>Hämtar handlingslistor...</p>
{:else if $ListStoreState === "FETCHED"}
    {#each $ListStore as list (list._id)}
        <ShoppingListComponent {list} />
    {/each}
{:else}
    <p>Hoppsan, något har visst gått jättefel.</p>
{/if}

<style>
</style>

