import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as StartFuncBsSubTable } from "./BsSubTable/EntryFile.js";
import { StartFunc as UpdateButtonId } from "./UpdateButtonId/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    StartFuncBsSubTable();
    UpdateButtonId();
};

export { StartFunc };