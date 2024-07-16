import fs from "fs";

const StartFunc = ({ inSrcPath, inSrcTemplateHtmlsFolder }) => {
    fs.cpSync(`${inSrcTemplateHtmlsFolder}/Js/pages`, `${inSrcPath}/Js/pages`, { recursive: true });
};

export { StartFunc };