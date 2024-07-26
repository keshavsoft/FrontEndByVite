import path from "path";
import fs from "fs";

const StartFunc = ({ inTableName }) => {
    if (LocalFuncIsTablePresent({ inTableName }) === false) false;

    const data = LocalFuncColumnData({ inTableName });
    // console.log("aaaaaaa : ", inTableName, data);
    return LocalFuncReturnWantedColumnsOnly({ inColumnsData: data, inTableName });
};

const LocalFuncColumnData = ({ inTableName }) => {
    let LocalColumnsPath = "ColumnSchema";

    if (LocalFuncIsTablePresent({ inTableName }) === false) false;

    const data = fs.readFileSync(`${LocalColumnsPath}/${inTableName}.json`, { encoding: 'utf8' });

    return JSON.parse(data);
};

const LocalFuncReturnWantedColumnsOnly = ({ inColumnsData, inTableName }) => {
    const originalObject = inColumnsData;
    const keysToKeep = LocalFuncColumnsInTableSchema({ inTableName });
    let newObject = {};
    // console.log("bbbbbbb : ", originalObject, keysToKeep);
    if (keysToKeep === undefined) {
        return originalObject;
    };
    for (const [key, value] of Object.entries(keysToKeep)) {
        newObject[key] = { ...value, ...inColumnsData[key] };
    };

    return newObject;
    console.log(newObject); // Output: { name: "Alice", city: "London" }
};

const LocalFuncIsTablePresent = ({ inTableName }) => {
    let LocalColumnsPath = "ColumnSchema";

    let LocalFiles = fs.readdirSync(LocalColumnsPath).map(element => {
        return path.parse(element).name;
    });

    return LocalFiles.includes(inTableName);
};

const LocalFuncColumnsInTableSchema = ({ inTableName }) => {
    let LocalColumnsPath = `TableSchema/${inTableName}.json`;

    const data = fs.readFileSync(LocalColumnsPath, { encoding: 'utf8' });
    const LocalJsonData = JSON.parse(data);
    // console.log("LocalJsonData : ", LocalJsonData);
    return LocalJsonData.TableConfig.HtmlConfig?.main?.columns;
};

export { StartFunc }; 