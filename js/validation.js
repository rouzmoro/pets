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
    .addField('#account-date', [
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
