
function switchTheme() {

    let theme = localStorage.getItem("theme");

    if (theme == 'light') {
        document.body.classList.toggle("light-theme");
        document.getElementById("switcher-checkbox").checked = true;
    }

    document.getElementById('switcher-checkbox').addEventListener('click', function () {
        if (document.body.classList.toggle("light-theme")) {
            localStorage.setItem("theme", "light");
            console.log(localStorage.getItem("theme"));
        } else {
            localStorage.setItem("theme", "dark");
            console.log(localStorage.getItem("theme"));
        }
    });
}

document.addEventListener("DOMContentLoaded", switchTheme);