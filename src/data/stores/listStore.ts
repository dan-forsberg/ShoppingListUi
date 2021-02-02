import { writable } from "svelte/store";
import type ShoppingList from "../../models/ShoppingList";

export const listStore = writable<ShoppingList[]>([
    { items: null }
]);