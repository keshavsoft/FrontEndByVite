import { StartFunc as SubTableFooterSaveButtonId } from "./SubTableFooterSaveButtonId/EntryFile.js";
import { StartFunc as keyPress } from "./keyPress/func.js";

const StartFunc = () => {
    SubTableFooterSaveButtonId();
    jFLocalKeyPress();
    jFLocalSetFocusToFirstInput();
};

const jFLocalSetFocusToFirstInput = () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;
    let jVarLocalHtml = document.getElementById(jVarLocalTableName);
    let jVarLocalTableFooter = jVarLocalHtml.querySelector("tfoot input");
    jVarLocalTableFooter.focus();
};

const jFLocalKeyPress = () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;
    let jVarLocalHtml = document.getElementById(jVarLocalTableName);
    let jVarLocalTableFooter = jVarLocalHtml.querySelector("tfoot input");

    if (jVarLocalTableFooter === null === false) {
        jVarLocalTableFooter.addEventListener("keypress", keyPress);
    };
};

export { StartFunc };
