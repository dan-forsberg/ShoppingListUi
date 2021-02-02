<script lang="ts">
    import Api from "./data/api";
    import ShoppingLists from "./ShoppingLists.svelte";
    import CreateList from "./CreateList.svelte";
    import { ListStore, ListStoreState } from "./data/stores/listStore";

    let shoppingLists = Api.getLists();
    shoppingLists
        .then((response) => {
            ListStore.set(response.lists);
            ListStoreState.set("FETCHED");
        })
        .catch((err) => {
            console.error(err);
            ListStoreState.set("ERROR");
        });

    let createList = false;
    function toggleCreateList() {
        createList = !createList;
    }
</script>

<button on:click={toggleCreateList}>+</button>
{#if createList}
    <CreateList /> 
{:else}
    <ShoppingLists />
{/if}

<style>
</style>
