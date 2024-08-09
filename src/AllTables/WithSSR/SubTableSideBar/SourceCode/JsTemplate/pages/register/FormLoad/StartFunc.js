import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncCheckTocken } from "./Check/Tocken.js";

const StartFunc = () => {
    StartFuncAddListeners();
};

if (StartFuncCheckTocken({ inTokenName: "KSAToken" }) !== false) {

    const url = new URL(window.location.href);
    let NewURl = new URL("./login.html", url);

    window.location.href = NewURl.href;
};

export { StartFunc };
