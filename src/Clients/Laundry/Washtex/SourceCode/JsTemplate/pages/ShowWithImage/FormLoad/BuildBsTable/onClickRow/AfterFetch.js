// import UrlJson from './url.json' with {type: 'json'};

let StartFunc = async ({ inRowPk }) => {
    let LocalRowPk = inRowPk;
    let url = `/bin/${jVarGlobalTableName}/SingleImage/${LocalRowPk}`

    let jVarFromFetch = await fetch(url);
    console.log(jVarFromFetch);

    if (jVarFromFetch.status === 200) {
        const imageBlob = await jVarFromFetch.blob();

        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.getElementById('ShowImageId')
        image.src = imageObjectURL;

        const myModalAlternative = new bootstrap.Modal('#ShowImageModal', {
            keyboard: false
        });
        myModalAlternative.show();
    } else {
        swal({ "title": "No data" })
    }
};



export { StartFunc }