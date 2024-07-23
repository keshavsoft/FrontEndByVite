import { StartFunc as FetchGet } from "./FetchGet/Entry.js";
import { StartFunc as ToHtml } from "./ToHtml/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalResponse = await FetchGet();
    console.log("jVarLocalResponse : ", jVarLocalResponse);
    ToHtml({ inFetchData: jVarLocalResponse });
};

export { StartFunc }