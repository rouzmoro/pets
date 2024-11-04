
function switchTheme() {

    let theme = localStorage.getItem("theme");

    if (theme == 'light') {
        document.body.classList.toggle("light-theme");
        document.querySelector('.switcher--theme input').checked = true;
    }

    document.querySelector('.switcher--theme input').addEventListener('click', function () {
        if (document.body.classList.toggle("light-theme")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}

document.addEventListener("DOMContentLoaded", switchTheme);