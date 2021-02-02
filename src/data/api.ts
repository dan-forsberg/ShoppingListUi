import type ShoppingList from "../models/ShoppingList";

const PORT = 8080;
const URL = `http://wsl:${PORT}/api/`;
const headers = { 'Content-Type': 'application/json' };


type GetListsResponse = {
    lists: ShoppingList[];
    count: number;
};
const getLists = async (): Promise<GetListsResponse> => {
    const lists = await get('get/lists');
    if (lists.message !== undefined) {
        throw new Error(lists.message);
    }

    return lists;
}

type CreateListResult = {
    list?: ShoppingList;
    message?: string;
}

const createList = async (shoppingList: ShoppingList): Promise<CreateListResult> => {
    const result = await post('create/list', shoppingList);
    if (result.message !== undefined) {
        throw new Error(result.message);
    }
    return result;
}

/* HTTP request helpers */

const httpReq = async (endPoint: string, method: string, body?: any): Promise<any> => {
    let opts = {
        method: method,
        headers: headers,
    };

    if (body) {
        //@ts-ignore
        opts["body"] = JSON.stringify(body);
    }
    let results = await fetch(URL + endPoint, opts);

    return results.json();
}

const get = async (endPoint: string) => {
    return await httpReq(endPoint, "GET");
};

const post = async (endPoint: string, body: any): Promise<any> => {
    return await httpReq(endPoint, "POST", body);
}

/* delete is a reserved keyword */
const del = async (endPoint: string, body: any) => {
    return await httpReq(endPoint, "DELETE", body);
}

const put = async (endPoint: string, body: any) => {
    return await httpReq(endPoint, "PUT", body);
}

const patch = async (endPoint: string, body: any) => {
    return await httpReq(endPoint, "PATCH", body);
}

export default { getLists, createList };