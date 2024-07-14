import fs from "fs";
import { StartFunc as GetTableNames } from "./GetTableNames.js";

const StartFunc = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    const sidebarItems = fs.readFileSync(`KCodeAllTables/sideBarItems.json`, { encoding: 'utf8' });
    console.log("sidebarItems : ", sidebarItems);
    // let LoopInsidecolumnData = getColumnsData({ inTableName });
    let LocalTableNames = GetTableNames();

    Object.keys(LocalFiles).forEach((filename) => {
        let LoopInsideTableName = LocalTableNames.find(element => {
            return filename.startsWith(element);
        });
        console.log("LoopInsideTableName : ", LoopInsideTableName);
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development',
            tableName: LoopInsideTableName
        };
    });

    return variables;
};

export { StartFunc };