import { StartFunc as HtmlFiles } from "./HtmlFiles.js";
import { StartFunc as sideBarItems } from "./sideBarItems.js";
import { StartFunc as jsFiles } from "./jsFiles.js";

const StartFunc = ({ inSrcPath, inSrcTemplateHtmlsFolder }) => {
    HtmlFiles({ inSrcPath, inSrcTemplateHtmlsFolder });
    sideBarItems({ inSrcPath });
    jsFiles({ inSrcPath, inSrcTemplateHtmlsFolder });
};

export { StartFunc };