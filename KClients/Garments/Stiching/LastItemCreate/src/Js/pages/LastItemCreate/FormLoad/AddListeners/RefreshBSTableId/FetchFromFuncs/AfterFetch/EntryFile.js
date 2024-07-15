let StartFunc = (inData) => {
    let jVarLocalWithAggValues = inData;
    localStorage.setItem("StichRef", jVarLocalWithAggValues.pk);
    var $table = $('#table')
    // $table.bootstrapTable("load", jVarLocalWithAggValues);
};

export { StartFunc };