import UrlJson from "../../Config.json" assert { type: "json" }; 

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalTableName = jVarGlobalTableName;
    let jVarLocalroutePath = UrlJson.routePath;
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/${jVarLocalTableName}/MultiInsertWithCheck`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    console.log("response::", response);
    return response;
};

export { StartFunc };