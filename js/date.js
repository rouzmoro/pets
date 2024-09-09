let test = document.querySelector('#account-date');

const mask = IMask(test, maskOptions);

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
