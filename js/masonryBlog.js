let elem = document.querySelector('.chat-wrapper');
let msnry = new Masonry(elem, {
    itemSelector: '.chat-item',
    horizontalOrder: true,
    columnWidth: '.chat-item-sizer',
    gutter: '.chat-gutter',
    percentPosition: true,
});

let mutantor = document.querySelector('#chat-wrapper');

let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            msnry.layout();
        }
    });
});

observer.observe(mutantor, {
    childList: true,
    characterData: true,
    subtree: true
});

window.addEventListener("load", () => msnry.layout());