import fs from "fs";
import { StartFunc as getColumnsData } from "./getColumnsData.js";
import { StartFunc as GetTableNames } from "./GetTableNames.js";

const StartFunc = ({ mode, inFilesArray, inTableName, inSrcPath }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    // let LoopInsidecolumnData = getColumnsData({ inSrcPath, inTableName });
    let LocalTableNames = GetTableNames();
    const sidebarItems = fs.readFileSync(`${inSrcPath}/KCode/sideBarItems.json`, { encoding: 'utf8' });

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems: JSON.parse(sidebarItems),
            isDev: mode === 'development',
            tableName: "",
            columnData: {}
        };

        let LoopInsideTableName = LocalTableNames.find(element => {
            return filename.startsWith(element);
        });

        if (LoopInsideTableName === undefined === false) {
            let LoopInsidecolumnData = getColumnsData({ inSrcPath, inTableName: LoopInsideTableName });

            variables[filename + '.html'].tableName = LoopInsideTableName;
            variables[filename + '.html'].columnData = JSON.parse(LoopInsidecolumnData);
        };

    });

    return variables;
};

export { StartFunc };