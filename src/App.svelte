<script lang="ts">
    import Api from "./data/api";
    import CreateList from "./CreateList.svelte";
    import ShoppingListComponent from "./ShoppingList.svelte";
    import { listStore } from "./data/stores/listStore";

    let shoppingLists = Api.getLists();
    let finishedFetching: boolean | undefined = undefined;
    shoppingLists
        .then((response) => {
            listStore.set(response.lists);
            finishedFetching = true;
        })
        .catch((err) => {
            console.error(err);
            finishedFetching = false;
        });
</script>

<CreateList />
{#if finishedFetching === undefined}
    <p>Hämtar handlingslistor...</p>
{:else if finishedFetching === true}
    {#each $listStore as list}
        <ShoppingListComponent {list} />
    {/each}
{:else}
    <p>Hoppsan, något har visst gått jättefel.</p>
{/if}

<style>
</style>
