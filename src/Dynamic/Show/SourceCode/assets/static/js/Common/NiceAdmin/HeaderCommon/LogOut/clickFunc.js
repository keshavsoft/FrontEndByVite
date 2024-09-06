let StartFunc = () => {
    let jVarLocalCookieName = "KSToken";
    
    document.cookie = jVarLocalCookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export { StartFunc };