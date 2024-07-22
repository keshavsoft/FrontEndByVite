import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);
    formData.append("image", jFLocalImageToUrl());

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

        const data = photo.toDataURL("image/png");
        return data;
    };
};

const jFLocalImageToUrl = () => {
    var c = document.createElement('canvas');
    var img = document.getElementById('photo');
    c.height = img.naturalHeight;
    c.width = img.naturalWidth;
    var ctx = c.getContext('2d');

    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();

    return base64String;
};

export { StartFunc }