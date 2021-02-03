<script lang="ts">
    import type ListItem from "./models/ListItem";
    export let listItem: ListItem = {
        item: null,
        amount: null,
        cost: null,
    };
</script>

<label>
    <input
        tabindex="0"
        placeholder="Att köpa"
        class="item-name"
        type="text"
        name="item"
        bind:value={listItem.item}
    />
    <!-- svelte-ignore a11y-positive-tabindex -->
    <!-- let the item-name take the focus always -->
    <input
        tabindex="1"
        placeholder="Mängd"
        class="item-amount"
        type="number"
        name="amount"
        bind:value={listItem.amount}
    />
    <!-- svelte-ignore a11y-positive-tabindex -->
    <input
        tabindex="1"
        placeholder="Pris"
        class="item-cost"
        type="number"
        name="cost"
        bind:value={listItem.cost}
    />
</label>

<style>
    .item-amount, .item-cost {
        width: 70px;
        appearance: textfield;
    }
</style>
