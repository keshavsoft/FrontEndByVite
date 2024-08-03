let StartFunc = ({ inData }) => {
    let jVarGlobalName = jVarGlobalSubTableTagId;
    let jVarLocalTable = document.getElementById(`${jVarGlobalName}`);
    let jVarLocalTheads = jVarLocalTable.querySelectorAll("thead th");

    // $table.bootstrapTable("load", InData);
    let jVarLocalColumnKeys = [...jVarLocalTheads].map(element => {
        return element.dataset.field;
    });

    jFLocalBuildTable({ inData, inColumnKeys: jVarLocalColumnKeys, inTableId: jVarGlobalName });
};

let jFLocalBuildTable = ({ inData, inColumnKeys, inTableId }) => {
    let jVarLocalTableName = inTableId;
    let jVarLocalTable = document.getElementById(`${jVarLocalTableName}`);

    let jVarLocalColumnKeys = inColumnKeys;

    inData.forEach(element => {
        let tr = jVarLocalTable.insertRow(-1);

        for (var i = 0; i < jVarLocalColumnKeys.length; i++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = element[jVarLocalColumnKeys[i]];
        };
    });
};

export { StartFunc }