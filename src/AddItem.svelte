<script lang="ts">
    import type ListItem from "./models/ListItem";
    export let item: ListItem;
</script>

<label>
    <input class="item_name" type="text" name="item" bind:value={item.item} />
    <input class="item_amount" type="number" name="amount" bind:value={item.amount} />
    <input class="item_cost" type="number" name="cost" bind:value={item.cost} />
</label>
