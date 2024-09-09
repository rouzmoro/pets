function showOption(button, option) {
    let items = document.querySelectorAll('.profile-form');
    let activeButton = document.querySelector('.profile-button-active');

    if (button.classList.contains('profile-button-active') == false) {
        activeButton.classList.remove('profile-button-active');
        button.classList.add('profile-button-active');
        for (let item of items) {
            item.classList.add('hide');
        }
        option.classList.remove('hide');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    settings.addEventListener("click", function () {
        let option = document.querySelector('#settings-form');
        showOption(this, option);
    });
    
    pets.addEventListener("click", function () {
        let option = document.querySelector('#pets-form');
        showOption(this, option);
    });
    
    account.addEventListener("click", function () {
        let option = document.querySelector('#account-form');
        showOption(this, option);
    });
});