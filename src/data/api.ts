const PORT = 8080;
const URL = `http://wsl:${PORT}/api/`;
const headers =  { 'Content-Type': 'application/json'};

const getLists = async () => {
    let lists = await get('get/lists');
    console.log(lists);
    return;
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

export default { getLists };