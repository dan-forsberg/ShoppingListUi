<script lang="ts">
    import type ListItem from './models/ListItem';
    export let listItem: ListItem = {
        item: null,
        amount: null,
        price: null,
        bought: false,
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
    <input
        placeholder="Mängd"
        class="item-amount"
        type="number"
        name="amount"
        bind:value={listItem.amount}
    />
    <input
        placeholder="Pris"
        class="item-cost"
        type="number"
        name="price"
        bind:value={listItem.price}
    />
</label>

<style>
    .item-amount,
    .item-cost {
        width: 70px;
        appearance: textfield;
    }
</style>
