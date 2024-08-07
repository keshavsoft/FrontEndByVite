let StartFunc = () => {
    const chooseFile = document.getElementById("uploadFileId");
    const imgPreview = document.getElementById("img-preview");

    console.log("sssssssssss : ", this);
    const files = chooseFile.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" />';
        });
    }
};

export { StartFunc };