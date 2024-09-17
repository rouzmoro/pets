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
