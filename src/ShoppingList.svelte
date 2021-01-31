<script lang="ts">
    import ShoppingList from "./data/api";
    export let shoppingLists;
    async function showLists() {
        try {
            shoppingLists = await ShoppingList.getLists();
        } catch (ex) {
            console.log("uh uuh");
        }
    }

    //showLists();
    let list;
    // show list
</script>

<div>
    {#if shoppingLists !== undefined}
        <ul>
            {#each shoppingLists.lists as list}
                <h3>{list.name}</h3>
                {#each list.items as item}
                    {item.item}<br />
                {/each}
            {/each}
        </ul>
    {/if}
</div>