import fs from "fs";
import path from 'path';

const StartFunc1 = ({ inTableName }) => {
    let LocalSideBarArray = [];
    let LocalTableSchemaObject = LocalFuncReadJsonFiles();
    // console.log("LocalTableSchemaObject : ", LocalTableSchemaObject);
    LocalSideBarArray = Object.keys(LocalTableSchemaObject).map(element => {
        let LoopInsideObject = {};

        LoopInsideObject.name = element;
        LoopInsideObject.key = element;
        LoopInsideObject.icon = LocalTableSchemaObject[element].TableConfig.HtmlConfig.SideBar.icon;
        LoopInsideObject.children = LocalTableSchemaObject[element].TableConfig.HtmlConfig.SideBar.children;

        return LoopInsideObject;
    });
    console.log("LocalSideBarArray : ", LocalSideBarArray);
    return LocalSideBarArray;
};

const StartFunc = ({ inTableName }) => {
    const root = "TableSchema";

    let LoopInsideFileData = fs.readFileSync(`${root}/${inTableName}.json`, "utf8");

    let LoopInsideJsonFileData = JSON.parse(LoopInsideFileData);

    return LoopInsideJsonFileData.TableConfig.HtmlConfig.SideBar.children;
};

export { StartFunc };
