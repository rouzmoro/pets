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
    fixStepIndicator(n);

}

function nextPrev(n) {
    /*if (n == 1 && !validateForm()) {
        return false;
    }*/

    console.log(petValidation.fields.elem);

    let inputs = tabs[currentTab].querySelectorAll('.input-text');

    for (let input of inputs) {
        console.log(input);
        petValidation.revalidateField('#pet-name').then(isValid => { })
    }


    console.log(petValidation.fields[1].isValid);

    if (n == -1) {
        steps[currentTab].classList.remove('active');
    }

    tabs[currentTab].classList.add('hide');

    currentTab = currentTab + n;
    console.log(currentTab);

    if (currentTab >= tabs.length) {
        document.getElementById("regForm").submit();
        return false;
    }

    showTab(currentTab);
}

function validateForm() {
    let valid = true;
    let formFields = tabs[currentTab].getElementsByTagName("input");

    if (formFields) {
        for (let formField of formFields) {
            if (formField.value == "") {
                formField.classList.add("invalid");
                valid = false;
            }
        }
    }

    return valid;
}

function fixStepIndicator(n) {

    steps[n].classList.add('active');
}