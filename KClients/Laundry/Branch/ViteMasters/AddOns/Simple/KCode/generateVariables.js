import sidebarItems from './sideBarItems.json' with {type: 'json'};
import { StartFunc as getColumnsData } from "./getColumnsData.js";

const StartFunc = ({ mode, inFilesArray, inTableName }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let LoopInsidecolumnData = getColumnsData({ inTableName });

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development',
            tableName: inTableName,
            columnData: JSON.parse(LoopInsidecolumnData)
        };
    });

    return variables;
};

export { StartFunc };