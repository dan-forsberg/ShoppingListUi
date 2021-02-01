<script lang="ts">
import AddItem from "./AddItem.svelte";
import type ListItem from "./models/ListItem";
import type ShoppingList from "./models/ShoppingList";
let name:string;
let items:Array<ListItem> = [];
let itemsLength:number = items.length + 1;

function handleOnSubmit() {
    let shoppingList:ShoppingList= {
        name: name,
        items: items
    };
}

function addItemComponent() {
    ++itemsLength;
}
</script>
<form on:submit|preventDefault={handleOnSubmit}>
    <label>
        <input type="text" bind:value={name}/>
        {#each Array(itemsLength) as index }
            <AddItem bind:value={items[index]}/>
            <button on:click={addItemComponent} />
        {/each}
    </label>
</form>