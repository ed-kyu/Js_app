const clockBox = document.querySelector(".js-clock"),
        clockTitle = clockBox.querySelector("h2");

function getTime () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `Time ${hours}:${minutes}:${seconds}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();