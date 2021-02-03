<script lang="ts">
    import ShoppingList from "./ShoppingList.svelte";
    import { ListStore, ListStoreState } from "./data/stores/listStore";

    let listInFocus = undefined;

    function openList(list: any) {
        if (listInFocus === undefined) listInFocus = list;
        else listInFocus = undefined;

        listInFocus = listInFocus;
    }
</script>

{#if $ListStoreState === "UNFETCHED"}
    <p>Hämtar handlingslistor...</p>
{:else if $ListStoreState === "FETCHED"}
    {#if listInFocus === undefined}
        {#each $ListStore as list (list._id)}
            <div on:click={() => openList(list)}>
                <ShoppingList {list} collapsed={true} />
            </div>
        {/each}
    {:else}
        <div on:click={() => openList(listInFocus)}>
            <ShoppingList list={listInFocus} collapsed={false} />
        </div>
    {/if}
{:else}
    <p>Hoppsan, något har visst gått jättefel.</p>
{/if}

<style>
</style>
