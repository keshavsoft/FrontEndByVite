import path from "path";
import fs from "fs";

const StartFunc = ({ inTableName }) => {
    let LocalColumnsPath = "ColumnSchema";

    if (LocalFuncIsTablePresent({ inTableName }) === false) false;

    const data = fs.readFileSync(`${LocalColumnsPath}/${inTableName}.json`, { encoding: 'utf8' });

    return data;
};

const LocalFuncIsTablePresent = ({ inTableName }) => {
    let LocalColumnsPath = "ColumnSchema";
    console.log("LocalColumnsPath : ", LocalColumnsPath);

    let LocalFiles = fs.readdirSync(LocalColumnsPath).map(element => {
        return path.parse(element).name;
    });

    return LocalFiles.includes(inTableName);
};

export { StartFunc };