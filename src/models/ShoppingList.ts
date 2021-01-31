import type ListItem from './ListItem';
interface ShoppingList {
    name?: string;
    items: Array<ListItem>;
    createdAt: string;
    _id: string;
}

export default ShoppingList;