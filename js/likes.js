let counters = document.querySelectorAll('.likes-counter');

for (let counter of counters) {
    let count = parseInt(counter.textContent)
    counter.textContent = `${count} ` + getNoun(count, 'лайк', 'лайка', 'лайков');
}

for (let counter of counters) {
    counter.addEventListener('click', () => {
        let count = parseInt(counter.textContent);

        if (counter.classList.toggle('pressed')) {
            count++;
        } else {
            count--;
        }

        counter.textContent = `${count} ` + getNoun(count, 'лайк', 'лайка', 'лайков');
    });
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}