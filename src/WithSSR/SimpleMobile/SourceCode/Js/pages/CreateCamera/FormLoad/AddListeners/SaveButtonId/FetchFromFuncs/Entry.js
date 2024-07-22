import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    // const imgPreview = document.getElementById("img-preview");
    // imgPreview.style.display = "block";
    // imgPreview.innerHTML = '<img src="' + this.result + '" />';

    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalDataNeeded = await StartFuncFetchFuncs();

        if (jVarLocalDataNeeded.status === 200) {
            StartFuncAfterFetch();
        };
    };
};

export { StartFunc };