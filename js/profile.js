/*options*/

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

/*options end*/

/*select*/

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');


    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        if (this.parentElement.classList.contains('is-active')) {
            document.querySelectorAll('.is-active').forEach(item => {
                item.classList.remove('is-active');
            });
        } else {
            document.querySelectorAll('.is-active').forEach(item => {
                item.classList.remove('is-active');
            });
            this.parentElement.classList.add('is-active');
        }
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');

        currentText.innerText = text;
        select.classList.remove('is-active');
        select.querySelectorAll('.select__item').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');

    }

};

document.addEventListener('click', (event) => {
    let div = document.querySelector('.is-active');
    let withinBoundaries = event.composedPath().includes(div);

    if (div && !withinBoundaries) {
        div.classList.remove('is-active');
    }
})

document.addEventListener('DOMContentLoaded', select)

/*select end*/

/*mask*/

let test = document.querySelector('#account-birthdate');
let test2 = document.querySelector('#pet-birthdate');

const maskOptions = {
    mask: Date,
    pattern: 'd/`m/`Y',
    format: function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;

        return [day, month, year].join('/');
    },
    // define str -> date convertion
    parse: function (str) {
        var yearMonthDay = str.split('/');
        return new Date(yearMonthDay[2], yearMonthDay[1] - 1, yearMonthDay[0]);
    },
    min: new Date(1980, 0, 1),
    max: new Date(2020, 0, 1),
    lazy: false,
    placeholderChar: '-',
};

const mask = IMask(test, maskOptions);
const mask2 = IMask(test2, maskOptions);

/*mask end*/

/*tabs*/

let currentTab = 0;
let tabs = document.querySelectorAll('.tab');
let steps = document.querySelectorAll('.step');
showTab(currentTab);

function showTab(n) {
    let prev = document.querySelector('#prevBtn');
    let next = document.querySelector('#nextBtn');

    tabs[n].classList.remove('hide');

    if (n == 0 || n == (tabs.length - 1)) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (n == (tabs.length - 1)) {
        next.textContent = "Завершить";
    } else {
        next.textContent = "Дальше";
    }
    steps[n].classList.add('active');
}

function nextPrev(n) {
    if (currentTab < tabs.length - 1) {

        if (n == -1) {
            steps[currentTab].classList.remove('active');
        }

        /*if (n == 1 && !(validateForm())) {
            return false;
        }*/

        console.log('yes');

        tabs[currentTab].classList.add('hide');

        currentTab = currentTab + n;

        showTab(currentTab);

    } else {
        document.querySelector("#pets-form").submit();
    }

}

/*async function validateForm() {
    let valid = true;
    let inputs = tabs[currentTab].querySelectorAll('.input-text');

    if (inputs.length != 0) {
        for (let input of inputs) {
            let result = await petValidation.revalidateField(`#${input.id}`);
            if (!result) {
                console.log('1');
                valid = false;
                console.log(valid);
            }
        }
    }

    console.log('2');
    console.log(valid);

    return valid;

}*/

/*tabs end*/

/*validation*/

const accountValidation = new JustValidate('#account-form', {
    errorLabelStyle: {
        color: 'var(--solid-danger)'
    }
});

accountValidation
    .addField('#account-name', [
        {
            rule: 'required',
            errorMessage: 'Введите имя'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Имя должно содержать не менее 3 символов'
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Имя должно содержать не более 15 символов'
        },
    ])
    .addField('#account-birthdate', [
        {
            rule: 'required',
        },
        {
            validator: (value) => {
                return mask.unmaskedValue !== undefined && (mask.unmaskedValue.length >= 8);
            },
            errorMessage: 'Введите дату рождения',
        },
    ])
    .addField('#account-status', [
        {
            rule: 'maxLength',
            value: 32,
            errorMessage: 'Статус должен содержать не более 32 символов'
        },
    ])
    .addField('#account-location', [
        {
            rule: 'maxLength',
            value: 32,
            errorMessage: 'Местоположение должно содержать не более 32 символов'
        },
    ])
    .addField('#account-password-current', [
        {
            rule: 'password',
            errorMessage: 'Пароль должен содержать не менее 8 символов, букву и цифру'
        },
        {
            validator: (value, fields) => {
                if (fields['#account-password-new'] && fields['#account-password-new'].elem) {
                    if (value.length == 0 && fields['#account-password-new'].elem.value.length != 0) {
                        return false;
                    }
                }
                return true;
            },
            errorMessage: 'Текущий пароль должен быть заполнен',
        },

    ])
    .addField('#account-password-new', [
        {
            rule: 'password',
            errorMessage: 'Пароль должен содержать не менее 8 символов, букву и цифру'
        },
        {
            validator: (value, fields) => {
                if (fields['#account-password-current'] && fields['#account-password-current'].elem) {
                    if (fields['#account-password-current'].elem.value.length != 0 && value.length == 0) {
                        return false;
                    }
                }
                return true;
            },
            errorMessage: 'Введите новый пароль',
        },
    ])

const petValidation = new JustValidate('#pets-form', {
    errorLabelStyle: {
        color: 'var(--solid-danger)'
    }
});

petValidation
    .addField('#pet-name', [
        {
            rule: 'required',
            errorMessage: 'Введите имя'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Имя должно содержать не менее 3 символов'
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Имя должно содержать не более 15 символов'
        },
    ])
    .addField('#pet-description', [
        {
            rule: 'maxLength',
            value: 32,
            errorMessage: 'Описание должно содержать не более 32 символов'
        },
    ])

/*validation end*/