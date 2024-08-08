import { StartFunc as clickFunc } from "./clickFunc.js";
const CommonSignOutId = "SignOutId";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById(CommonSignOutId);

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", clickFunc);
    };
};

StartFunc();