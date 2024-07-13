import sidebarItems from './sideBarItems.json' with {type: 'json'};
import { StartFunc as GetTableNames } from "./GetTableNames.js";

const StartFunc = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
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

const LocalFuncReadColumnsSchema = ({ inTableName }) => {
    let LocalFilePath = `ColumnSchema/${ColumnSchema}`;

    const data = fs.readFileSync(LocalFilePath, { encoding: 'utf8' });

    return data;
};

export { StartFunc };