import fs from "fs";
import path, { resolve } from 'path';
import { StartFunc as GetTableNames } from "../GetTableNames.js";

const LocalFuncGetFiles = ({ inSrcTemplateHtmlsFolder }) => {
    const root = `${inSrcTemplateHtmlsFolder}/HtmlFiles`;
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    return files;
};

const StartFunc = ({ inSrcPath, inSrcTemplateHtmlsFolder }) => {
    const root = `${inSrcPath}/HtmlFiles`;

    let TableNamesAsArray = GetTableNames();
    let LocalHtmlFiles = LocalFuncGetFiles({ inSrcTemplateHtmlsFolder });
    // console.log("LocalHtmlFiles : ", LocalHtmlFiles, inToPath);
    TableNamesAsArray.forEach(LoopTableName => {
        for (const [key, value] of Object.entries(LocalHtmlFiles)) {
            let LocalFileData = fs.readFileSync(value, "utf8");

            if (key === "index") {
                fs.writeFileSync(`${root}/${key}.html`, LocalFileData);
                continue;
            };

            fs.writeFileSync(`${root}/${LoopTableName}${key}.html`, LocalFileData);
        };
    });
};

export { StartFunc };