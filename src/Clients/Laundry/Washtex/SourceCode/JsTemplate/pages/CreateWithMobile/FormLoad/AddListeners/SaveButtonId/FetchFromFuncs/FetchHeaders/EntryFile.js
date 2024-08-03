import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalFormData = jFLocalserializeFormData(jVarLocalForm);

    KeysJson.body = JSON.stringify(jFLocalForTwilio({ inBodyData: jVarLocalFormData }));

    return KeysJson;
};

let jFLocalForTwilio = ({ inBodyData }) => {
    console.log("aaaaaaaaaa : ", inBodyData);
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll(".mobileTwilioClass");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.name in inBodyData) {
            const phoneInputField = LoopItem;
            // const phoneInput = window.intlTelInput(phoneInputField);
            const phoneInput = window.intlTelInputGlobals.getInstance(phoneInputField);
            // console.log("jVarLocalRequiredElements : ", phoneInput, phoneInput.getNumber());
            const phoneNumber = phoneInput.getNumber();

            inBodyData[LoopItem.name] = phoneNumber;
        };
    });

    return inBodyData;
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(value);
        } else {
            serializedData[name] = value;
        }
    }

    return serializedData;
};

export { StartFunc }