let StartFunc = () => {
    let jVarLocalWithAggValues = jVarGlobalPresentViewData;
    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalWithAggValues);
};

export { StartFunc };