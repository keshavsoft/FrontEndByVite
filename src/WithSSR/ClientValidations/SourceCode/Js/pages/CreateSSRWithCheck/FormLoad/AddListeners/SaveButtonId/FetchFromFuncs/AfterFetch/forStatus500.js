let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = inResponse;
    let jVarLocalResponseText = await jVarLocalResponse.text();

    Swal.fire({
        title: "Good job!",
        text: jVarLocalResponseText,
        icon: "success"
    });
};

export { StartFunc };