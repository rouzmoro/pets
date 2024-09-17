let attach = document.querySelector('label[for="attachments-checkbox"]');
let fileInput = document.querySelector("#attachments-checkbox");
let dropZone = document.querySelector('label[for="attachments-checkbox"]');
let notLoaded = true;

function inputImage(files) {
    for (let file of files) {
        if (file && file.type.startsWith("image/")) {
            displayImage(file);

        } else {
            alert('Можно загружать только изображения.');
        }
    }

    if (notLoaded == true) {
        attach.className = 'attachment attachment-new';
        attach.textContent = '+';
        notLoaded = false;
    }
};

function displayImage(file) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let imageURL = URL.createObjectURL(file);

    attach.before(div);
    div.classList.add('attachment');
    div.append(img);
    img.src = imageURL;

    img.onload = () => URL.revokeObjectURL(imageURL);
}

dropZone.addEventListener('dragover', event => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    console.log('yes');
});

dropZone.addEventListener('drop', event => {
    event.preventDefault();
    let files = event.dataTransfer.files;
    inputImage(files);
});

fileInput.addEventListener('change', event => {
    let files = fileInput.files;
    inputImage(files);
});