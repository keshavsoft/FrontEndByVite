let StartFunc = (inData) => {
    var $table = $('#table');
    const jVarLocalColumnsArray = jFLocalPrepareColumns({ inData });

    $table.bootstrapTable({
        columns: jVarLocalColumnsArray,
        data: inData
    });
};

const jFLocalPrepareColumns = ({ inData }) => {
    const jVarLocalFirstRow = inData[0];

    const jVarLocalColumnsArray = Object.keys(jVarLocalFirstRow).map(element => {
        return {
            field: element,
            title: element
        };

    });

    return jVarLocalColumnsArray;
};

export { StartFunc };