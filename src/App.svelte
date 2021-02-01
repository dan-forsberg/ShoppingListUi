<script lang="ts">
    import ShoppingList from "./ShoppingList.svelte";
    import Api from "./data/api";
    import CreateList from "./CreateListComponent.svelte";

    let shoppingLists = Api.getLists();
</script>

<CreateList />

{#await shoppingLists}
    <p>Hämtar handlingslistor...</p>
{:then lists}
    {#each lists.lists as list (list._id)}
        <ShoppingList {list} />
    {/each}
{:catch error}
    <p>:( {error.message}</p>
{/await}

<style>
</style>
