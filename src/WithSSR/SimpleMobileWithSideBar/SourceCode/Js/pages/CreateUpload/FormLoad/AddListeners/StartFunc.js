import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as uploadFileId } from "./uploadFileId/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    uploadFileId();
};

export { StartFunc };