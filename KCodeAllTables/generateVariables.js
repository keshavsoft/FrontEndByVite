import fs from "fs";
import { StartFunc as GetTableNames } from "./GetTableNames.js";
import { StartFunc as getColumnsData } from "./getColumnsData.js";

const StartFunc = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    const sidebarItems = fs.readFileSync(`KCodeAllTables/sideBarItems.json`, { encoding: 'utf8' });
    console.log("sidebarItems : ", sidebarItems);
    // let LoopInsidecolumnData = getColumnsData({ inTableName });
    let LocalTableNames = GetTableNames();


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
            let LoopInsidecolumnData = getColumnsData({ inTableName: LoopInsideTableName });

            variables[filename + '.html'].tableName = LoopInsideTableName;
            variables[filename + '.html'].columnData = JSON.parse(LoopInsidecolumnData);
        };

    });

    return variables;
};

export { StartFunc };