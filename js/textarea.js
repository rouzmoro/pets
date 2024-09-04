function initTextarea() {
    const textareas = document.getElementsByTagName("textarea");
    for (let textarea of textareas) {
        textarea.addEventListener("input", () => resizeTextarea(textarea));
        window.addEventListener('resize', () => resizeTextarea(textarea));
    }
}

function resizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + "px";
}

document.addEventListener("DOMContentLoaded", initTextarea);