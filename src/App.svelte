<script lang="ts">
    import ShoppingList from "./ShoppingList.svelte";
    import Api from "./data/api";

    let shoppingLists = Api.getLists();

</script>

{#await shoppingLists}
    <p>Hämtar handlingslistor...</p>
{:then lists}
    {#each lists.lists as list (list._id)}
        <ShoppingList list={list} />
    {/each}
{:catch error}
    <p>:( {error.message}</p>
{/await}

<style>
</style>
