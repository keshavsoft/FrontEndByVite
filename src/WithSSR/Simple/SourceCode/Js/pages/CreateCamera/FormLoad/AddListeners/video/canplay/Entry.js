let StartFunc = (ev) => {
    const video = ev.currentTarget;
    const width = 320;    // We will scale the photo width to this
    let height = 0;

    let streaming = false;

    if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height)) {
            height = width / (4 / 3);
        }

        video.setAttribute("width", width);
        video.setAttribute("height", height);
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        streaming = true;
    };
};

export { StartFunc };