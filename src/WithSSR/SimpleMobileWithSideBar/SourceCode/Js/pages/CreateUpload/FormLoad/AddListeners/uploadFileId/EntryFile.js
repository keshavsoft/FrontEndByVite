import { StartFunc as StartFuncFuncToRun } from "./changeFunc/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("uploadFileId");
    // console.log("aaaaaaaa : ", jVarLocalRefreshBSTableId);
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("change", StartFuncFuncToRun);
    };
};

export { StartFunc };