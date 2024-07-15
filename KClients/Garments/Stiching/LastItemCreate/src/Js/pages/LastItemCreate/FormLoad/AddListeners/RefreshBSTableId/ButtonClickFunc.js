import { StartFunc as StartFuncHead } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncBody } from "./FetchFromEndPoint/EntryFile.js";

let StartFunc = async () => {
    await StartFuncHead();
    await StartFuncBody();
};

export { StartFunc }