import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncCheckTocken } from "./Check/Tocken.js";

const StartFunc = () => {
    StartFuncAddListeners();
};

if (StartFuncCheckTocken({ inTokenName: "KSToken" }) !== false) {

    const url = new URL(window.location.href);
    let NewURl = new URL("./index.html", url);

    window.location.href = NewURl.href;
};

export { StartFunc };
