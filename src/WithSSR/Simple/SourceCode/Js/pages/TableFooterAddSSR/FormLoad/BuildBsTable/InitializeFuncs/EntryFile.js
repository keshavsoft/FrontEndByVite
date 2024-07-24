import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";

const StartFunc = async () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: StartFuncForOnPostBody
    });
};

export { StartFunc };
