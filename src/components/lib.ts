export const loadImage = () => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', "static/media/logo.png");
    xhr.onload = function (e) {
        e.preventDefault()
        return xhr.response
    };
    xhr.send()
}