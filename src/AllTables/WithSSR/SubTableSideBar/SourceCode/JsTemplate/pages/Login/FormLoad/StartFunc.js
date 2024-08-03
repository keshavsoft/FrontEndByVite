import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    StartFuncAddListeners();
};

const jFLocalCheckToken = ({ inTokenName }) => {
    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${inTokenName}=`))
        ?.split("=")[1];

    return cookieValue;
};

export { StartFunc };
