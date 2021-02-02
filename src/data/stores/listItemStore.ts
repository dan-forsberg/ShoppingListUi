import { writable } from "svelte/store";
import type ListItem from "../../models/ListItem";

export const listItemStore = writable<ListItem[]>([
    { item: null },
]);
