import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as CameraId } from "./CameraId/EntryFile.js";
import { StartFunc as startbutton } from "./startbutton/EntryFile.js";
import { StartFunc as video } from "./video/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    CameraId();
    startbutton();
    video();
};

export { StartFunc };