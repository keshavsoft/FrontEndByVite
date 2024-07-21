import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as CameraId } from "./CameraId/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    CameraId();
};

export { StartFunc };