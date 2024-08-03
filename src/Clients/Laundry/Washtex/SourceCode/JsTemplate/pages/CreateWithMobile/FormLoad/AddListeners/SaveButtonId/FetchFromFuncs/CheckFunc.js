let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            // console.log("LoopItem : ", LoopItem.classList.contains("mobileTwilioClass"));
            // form-control mobileTwilioClass

            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
            return;
        };

        if (LoopItem.classList.contains("mobileTwilioClass")) {
            let jVarLocaFromTwilio = jFLocalTwilio(LoopItem);

            if (jVarLocaFromTwilio === false) {
                jVarLocalReturnTF = false;
                return;
            };
        };
    });

    return jVarLocalReturnTF;
};

let jFLocalTwilio = (inHtmlControl) => {
    const phoneInputField = inHtmlControl;
    // const phoneInput = window.intlTelInput(phoneInputField);
    const phoneInput = window.intlTelInputGlobals.getInstance(phoneInputField);
    // console.log("jVarLocalRequiredElements : ", phoneInput, phoneInput.getNumber());
    const phoneNumber = phoneInput.getNumber();
    // alert(phoneNumber);
    // info.style.display = "none";
    // error.style.display = "none";

    if (phoneInput.isValidNumber()) {
        return true;
        alert(phoneNumber);
        // info.style.display = "";

        // info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    } else {
        return false;
        // jVarLocalError.style.display = "";
        // jVarLocalError.innerHTML = `Invalid phone number.`;
    };
};

let jFLocalTwilio1 = (inHtmlControl) => {
    const phoneInputField = inHtmlControl;
    const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    const jVarLocalClosest = inHtmlControl.closest(".col-md-8");
    const jVarLocalError = jVarLocalClosest.querySelector(".invalid-feedback");
    console.log("aaaaaaaaa : ", jVarLocalClosest, jVarLocalError);
    const info = document.querySelector(".alert-info");
    const error = document.querySelector(".alert-error");

    const phoneNumber = phoneInput.getNumber();
    alert(phoneNumber);
    // info.style.display = "none";
    // error.style.display = "none";

    if (phoneInput.isValidNumber()) {
        alert(phoneNumber);
        // info.style.display = "";

        // info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    } else {
        jVarLocalError.style.display = "";
        jVarLocalError.innerHTML = `Invalid phone number.`;
    }

};

export { StartFunc };