import { StartFunc as AfterFetch } from "./AfterFetch.js";

const StartFunc = async (row, $element, field) => {
    if (field === "KS-ImageUploadButton") {
        if ("id" in row) {
            AfterFetch({ inRowPk: row.id });
        };
        if ("pk" in row) {
            AfterFetch({ inRowPk: row.pk });
        };
    };
};

export { StartFunc };
