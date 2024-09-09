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