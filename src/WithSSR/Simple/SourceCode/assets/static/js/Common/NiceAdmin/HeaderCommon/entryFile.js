import { StartFunc as LoginModalStartFunc } from "./LoginModal/EntryFile.js";
import { StartFunc as LogOut } from "./LogOut/EntryFile.js";

let StartFunc = ({ inSuccessFunc }) => {
    LoginModalStartFunc({ inSuccessFunc });
    LogOut();
};

export { StartFunc };