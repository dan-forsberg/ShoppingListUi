<script lang="ts">
    import Api from "./data/api";
    import CreateList from "./CreateListComponent.svelte";
    import ShoppingListComponent from "./ShoppingListComponent.svelte";

    let shoppingLists = Api.getLists();
</script>

<CreateList />

{#await shoppingLists}
    <p>Hämtar handlingslistor...</p>
{:then lists}
    {#each lists.lists as list (list._id)}
        <ShoppingListComponent {list} />
    {/each}
{:catch error}
    <p>:( {error.message}</p>
{/await}

<style>
</style>
