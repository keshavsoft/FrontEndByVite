import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: StartFuncForOnPostBody

    });
};

export { StartFunc };
