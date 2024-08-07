// import sidebarItems from './sideBarItems.json' with {type: 'json'};

// import { StartFunc as getColumnsData } from "./getColumnsData.js";

import { StartFunc as prepareSideBar } from "./prepareSideBar.js";
import { StartFunc as getColumnsData } from "../../../CommonFuncs/getColumnsData.js";

const StartFunc = ({ mode, inFilesArray, inTableName }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let LoopInsidecolumnData = getColumnsData({ inTableName });
    const LocalSideBar = prepareSideBar({ inTableName });
    console.log("LocalSideBar : ", LocalSideBar);

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems: LocalSideBar,
            isDev: mode === 'development',
            tableName: inTableName,
            columnData: LoopInsidecolumnData
        };
    });

    return variables;
};

export { StartFunc };