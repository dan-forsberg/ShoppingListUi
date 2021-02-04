import type ListItem from "../models/ListItem";
import type ShoppingList from "../models/ShoppingList";

const PORT = 8080;
const URL = `http://wsl:${PORT}/api/`;
const headers = { 'Content-Type': 'application/json' };

type GetListsResponse = {
    lists: ShoppingList[];
    count: number;
};
const getLists = async (): Promise<GetListsResponse> => {
    const result = await get('get/lists');
    if (result.status !== 200) {
        throw new Error(result.json().message);
    }

    return result.json();
}

type CreateListResult = {
    list?: ShoppingList;
    message?: string;
}
const createList = async (shoppingList: ShoppingList): Promise<CreateListResult> => {
    const result = await post('create/list', shoppingList);
    if (result.status !== 201) {
        throw new Error(result.json().message);
    }

    return result.json();
}

type DeleteListResult = {
    message: string;
}
const deleteList = async (shoppingList: ShoppingList): Promise<DeleteListResult> => {
    const result = await remove(`delete/list/${shoppingList._id}`);
    if (result.status !== 200) {
        throw new Error(result.json().message);
    }

    return result.json();
}

const deleteItem = async (shoppingList: ShoppingList, listItem: ListItem) => {
    const listID = shoppingList._id;
    const itemID = listItem._id;

    const result = await remove(`update/list/${listID}/deleteItem/${itemID}`);
    if (result.status !== 200) {
        throw new Error(result.json().message);
    }

    return result.json();
}

const toggleItemBought = async (shoppingList: ShoppingList, listItem: ListItem) => {
    const listID = shoppingList._id;
    const itemID = listItem._id;

    const result = await patch(`update/list/${listID}/toggleBought/${itemID}`);
    if (result.status !== 200) {
        throw new Error(result.json().message);
    }

    return result.json();
}

const addItemToList = async (shoppingList: ShoppingList, listItem: ListItem) => {
    const listID = shoppingList._id;
    const body = { items: listItem };
    const result = await put(`update/list/${listID}/addItem`, body);

    if (result.status !== 200) {
        throw new Error(result.json().message);
    }

    return result.json();
}

/* HTTP request helpers */
const httpReq = async (endPoint: string, method: string, body?: any): Promise<any> => {
    let opts = {
        method: method,
        headers: headers,
    };

    if (body) {
        opts["body"] = JSON.stringify(body);
    }
    let results = await fetch(URL + endPoint, opts);

    return results;
}

const get = async (endPoint: string) => {
    return await httpReq(endPoint, "GET");
};

const post = async (endPoint: string, body: any): Promise<any> => {
    return await httpReq(endPoint, "POST", body);
}

/* delete is a reserved keyword */
const remove = async (endPoint: string) => {
    return await httpReq(endPoint, "DELETE");
}

const put = async (endPoint: string, body: any) => {
    return await httpReq(endPoint, "PUT", body);
}

const patch = async (endPoint: string) => {
    return await httpReq(endPoint, "PATCH");
}

export default { getLists, createList, deleteList, deleteItem, toggleItemBought, addItemToList };