import { StartFunc as forStatus200 } from "./forStatus200.js";
import { StartFunc as forStatus500 } from "./forStatus500.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = inResponse;

    switch (jVarLocalResponse.status) {
        case 200:
            forStatus200();

            break;
        case 500:
            forStatus500({ inResponse });

            break;
        default:
            break;
    };
};

export { StartFunc };