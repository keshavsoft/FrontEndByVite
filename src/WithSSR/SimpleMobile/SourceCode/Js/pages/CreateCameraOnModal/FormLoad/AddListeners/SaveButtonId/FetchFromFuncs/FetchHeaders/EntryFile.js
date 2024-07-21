import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);
    formData.append("image", takepicture());

    KeysJson.body = formData;

    return KeysJson;
};

function takepicture() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = 320;    // We will scale the photo width to this
    const height = 300;
    const photo = document.getElementById("photo");

    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL("image/png");
        return data;
    };
};

export { StartFunc }