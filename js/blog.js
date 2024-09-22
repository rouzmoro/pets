let counters = document.querySelectorAll('.chat-counter.likes');

for (let counter of counters) {
    counter.addEventListener('click', () => {
        let count = parseInt(counter.textContent);

        if (Number.isNaN(count)) {
            count = 0;
        }

        if (counter.classList.toggle('pressed')) {
            count++;
        } else {
            count--;
        }

        if (count > 0) {
            let span = document.createElement('span');
            counter.textContent = `${count} `;
            counter.append(span);
            span.classList.add('chat-counter-name');
            span.textContent = getNoun(count, 'лайк', 'лайка', 'лайков');
        } else {
            counter.textContent = '';
        }
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