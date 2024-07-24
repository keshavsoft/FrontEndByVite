import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";
let jVarCommonTableTagId = jVarGlobalTableTagId;

const StartFunc = () => {
    StartFuncTableFooterSaveButtonId();
    jFLocalSetFocus();
};

const jFLocalSetFocus = () => {
    let jVarLocalTable = document.getElementById(`${jVarCommonTableTagId}`);
    jVarLocalTable.querySelector("tfoot").querySelector("input").focus();
};

export { StartFunc };