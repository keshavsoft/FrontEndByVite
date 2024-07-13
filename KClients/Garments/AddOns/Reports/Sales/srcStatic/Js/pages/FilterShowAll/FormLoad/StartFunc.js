import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncBuildBSTables } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    StartFuncAddlisteners();
};

export { StartFunc };
