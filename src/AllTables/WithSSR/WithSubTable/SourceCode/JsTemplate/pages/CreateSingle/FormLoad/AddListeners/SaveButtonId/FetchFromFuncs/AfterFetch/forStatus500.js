let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = inResponse;
    let jVarLocalResponseText = await jVarLocalResponse.text();

    Swal.fire({
        title: "Error!",
        text: jVarLocalResponseText,
        icon: "error"
    });
};

export { StartFunc };