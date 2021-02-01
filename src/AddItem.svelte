<script lang="ts">
import type ListItem from "./models/ListItem";
    export let listItem: ListItem = {
        item: null,
        amount: null,
        cost: null
    };
    </script>

<label>
    <input class="item_name" type="text" name="item" bind:value={listItem.item} />
    <input class="item_amount" type="number" name="amount" bind:value={listItem.amount} />
    <input class="item_cost" type="number" name="cost" bind:value={listItem.cost} />
</label>

<style>
    
</style>