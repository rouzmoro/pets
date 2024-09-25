/*likes*/

let counters = document.querySelectorAll('.chat-counter.likes');

for (let counter of counters) {
    counter.addEventListener('click', () => {
        let count = parseInt(counter.textContent);

        if (Number.isNaN(count)) {
            count = 0;
        }

        if (counter.classList.toggle('pressed')) {
            count++;
        } else {
            count--;
        }

        if (count > 0) {
            let span = document.createElement('span');
            counter.textContent = `${count} `;
            counter.append(span);
            span.classList.add('chat-counter-name');
            span.textContent = getNoun(count, 'лайк', 'лайка', 'лайков');
        } else {
            counter.textContent = '';
        }
    });
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

/*likes end*/

/*masonry*/

let elem = document.querySelector('.chat-wrapper');
let msnry = new Masonry(elem, {
    itemSelector: '.chat-item',
    horizontalOrder: true,
    columnWidth: '.chat-item-sizer',
    gutter: '.chat-gutter',
    percentPosition: true,
});

/*let mutantor = document.querySelector('#chat-wrapper');

let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            console.log('not');
            msnry.layout();
        }
    });
});

observer.observe(mutantor, {
    childList: true,
    characterData: true,
    subtree: true
});*/

/*masonry end*/

/*textarea*/

let comments = document.querySelectorAll('.chat-textarea');

for (let comment of comments) {
    comment.addEventListener('input', () => {
        resizeTextarea(comment);
        msnry.layout();
    })
}

function resizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + "px";
}

window.addEventListener("load", () => msnry.layout());
/*window.addEventListener('resize', () => resizeTextarea(textarea));*/

/*textarea end*/

/*attachments*/

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

/*attachments end*/