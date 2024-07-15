// import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inFetchData }) => {
    let jVarLocalData = await inFetchData.json();

    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalData);

};

export { StartFunc }