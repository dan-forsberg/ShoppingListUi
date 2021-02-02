import { writable } from "svelte/store";
import type ShoppingList from "../../models/ShoppingList";

export const ListStore = writable<ShoppingList[]>([
    { items: null }
]);
export const ListStoreState = writable<string>("UNFETCHED");