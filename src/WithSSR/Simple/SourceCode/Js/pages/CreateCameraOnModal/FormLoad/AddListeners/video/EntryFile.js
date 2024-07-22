import { StartFunc as canplay } from "./canplay/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("video");
    // console.log("aaaaaaaa : ", jVarLocalRefreshBSTableId);
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("canplay", canplay, false);
    };
};

export { StartFunc };