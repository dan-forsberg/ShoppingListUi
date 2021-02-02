<script lang="ts">
    import Api from "./data/api";
    import ShoppingLists from "./ShoppingLists.svelte";
    import CreateList from "./CreateList.svelte";
    import { ListStore, ListStoreState } from "./data/stores/listStore";
    import { slide } from 'svelte/transition';

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
    <div transition:slide class="modal">
        <div class="modal-content">
            <CreateList />
        </div>
    </div>
{/if}
<ShoppingLists />

<style>
    .modal {
        display: block;
        background-color: #010101;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>
