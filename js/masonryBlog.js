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