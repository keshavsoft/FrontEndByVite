import { StartFunc as HtmlFiles } from "./HtmlFiles.js";
import { StartFunc as sideBarItems } from "./sideBarItems.js";

const StartFunc = ({ inSrcPath }) => {
    HtmlFiles({ inSrcPath });
    sideBarItems({ inSrcPath });
};

export { StartFunc };