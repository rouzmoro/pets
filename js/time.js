function updateTime() {

    let currentDate = new Date();
    let timeString = document.querySelector("#time");
    let dateString = document.querySelector("#date");

    timeString.textContent = currentDate.toLocaleTimeString();
    timeString.setAttribute('datetime', currentDate.toISOString().slice(0, -8));

    dateString.textContent = currentDate.toLocaleDateString();
    dateString.setAttribute('datetime', currentDate.toISOString().slice(0, 10));

    setTimeout(updateTime, 1000);
    
}

document.addEventListener("DOMContentLoaded", updateTime);