import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as HeaderCommon } from "../../../assets/static/js/Common/NiceAdmin/HeaderCommon/entryFile.js";

const StartFunc = () => {
  StartFuncFormLoad();

  let jVarLocalFromAdmin = HeaderCommon({ inSuccessFunc: StartFuncFormLoad });

  if (jVarLocalFromAdmin) {
    StartFuncShowOnDom().then();
  };
};

StartFunc();