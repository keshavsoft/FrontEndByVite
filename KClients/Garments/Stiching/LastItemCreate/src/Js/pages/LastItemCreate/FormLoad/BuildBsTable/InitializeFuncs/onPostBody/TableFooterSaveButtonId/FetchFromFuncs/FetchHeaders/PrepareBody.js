//import { StartFunc as StartFuncForColumns } from "../../../ForColumns/EntryFile.js";
// import { StartFunc as StartFuncForColumns } from "../../../../ForColumns/EntryFile.js";

const StartFunc = () => {
    let jVarLocalTableTagId = jVarGlobalTableTagId;
    let jVarLocaTableHtml = document.getElementById(jVarLocalTableTagId);
    let jVarLocalTableFooter = jVarLocaTableHtml.querySelector("tfoot");
    let jVarLocalInputs = jVarLocalTableFooter.querySelectorAll("input");
    let jVarLocalReturnObject = {};

    for (const elem of jVarLocalInputs) {
        jVarLocalReturnObject[elem.name] = elem.value;
    };
    console.log("jVarLocalReturnObject : ", jVarLocalReturnObject);
    jVarLocalReturnObject.FK = localStorage.getItem("StichRef")
    // jVarLocalReturnObject.GAmount = LocalFuncForjVarLocalTableFooterGAmount();

    return jVarLocalReturnObject;
};

let LocalFuncForjVarLocalTableFooterGAmount = () => {
    let jVarLocalTableFooterBSGroupId = 'GrossAmount'

    const jVarLocalHtmlId1 = document.querySelectorAll('input[name^="GrossAmount"]');

    const jVarLocalHtmlId2 = document.querySelectorAll('input[name^="AddOnAmount"]');

    if (jVarLocalHtmlId1 === null === false || jVarLocalHtmlId2 === null === false) {
        let jVarGrossAmount = jVarLocalHtmlId1.value.trim();
        let jVarAddOnAmount = jVarLocalHtmlId2.value.trim();
        if (!jVarAddOnAmount) {
            jVarAddOnAmount = 0;
        }

        return parseInt(jVarGrossAmount) + parseInt(jVarAddOnAmount);
    };

};
export { StartFunc }