import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);
    formData.append("image", jFLocalImageToUrl());

    KeysJson.body = formData;

    return KeysJson;
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