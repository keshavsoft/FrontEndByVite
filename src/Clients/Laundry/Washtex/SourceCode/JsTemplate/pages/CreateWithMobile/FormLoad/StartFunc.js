import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToLocalStorage } from "./ToLocalStorage/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";

const StartFunc = async () => {
    jFLocalInputsInitialize();
    StartFuncAddListeners();
    ToLocalStorage();
    ToDataList();
    ShowOnDom();
};

const jFLocalInputsInitialize = () => {
    let jVarLocalFormId = document.getElementById('FormId');
    let jVarLocalByClassName = document.getElementsByClassName("mobileTwilioClass");

    var div_array = [...jVarLocalByClassName]; // converts NodeList to Array
    div_array.forEach(div => {
        // const phoneInputField = inHtmlControl;
        const phoneInput = window.intlTelInput(div, {
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    });
};

export { StartFunc };
