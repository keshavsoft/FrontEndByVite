import UrlJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let jVarLocalTableName = jVarGlobalTableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${jVarLocalTableName}/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

