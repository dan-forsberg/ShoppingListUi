<script lang="ts">
    import ListItem from "./ListItemComponent.svelte";
    import type ShoppingList from "./models/ShoppingList";

    export let list: ShoppingList;
</script>

<div>
    <ul>
        <h3>{list.name}</h3>
        {#each list.items as item (item._id)}
            <li><ListItem {item} /></li>
        {/each}
    </ul>
</div>
