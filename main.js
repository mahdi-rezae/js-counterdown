const userDate = prompt('Enter The Date Of Your Holidays: (date format: "1 Jan 2024")');
const userSen = prompt('Enter Your Holiday Sentence:');
const userImg = prompt('Paste Your Image Url Here:');

let day = document.querySelector('#days');
let hour = document.querySelector('#hours');
let min = document.querySelector('#mins');
let sec = document.querySelector('#secs');
let text = document.querySelector('h1');
let image = document.querySelector('body');

let eveDate = '1 Jan 2024';

function countdown() {
    userPrompt();

    let eve = new Date(eveDate);
    let currentDate = new Date();
    let diffrent = eve - currentDate;

    const diffSeconds = diffrent / 1000;

    const days = Math.floor(diffSeconds / 3600 / 24);
    const hours = Math.floor(diffSeconds / 3600 % 24);
    const minutes = Math.floor(diffSeconds / 60 % 60);
    const seconds = Math.floor(diffSeconds) % 60;

    day.innerText = dateFormat(days);
    hour.innerText = dateFormat(hours);
    min.innerText = dateFormat(minutes);
    sec.innerText = dateFormat(seconds);

    console.log(days, hours, minutes, seconds);
}

function dateFormat(time) {
    return time < 10 ? (`0${time}`) : time;
}

function userPrompt() {
    userDate != "" ? eveDate = userDate : eveDate;
    userSen != "" ? text.innerText = userSen : text;
    if (userImg != "") {
        image.style.backgroundImage = `url("${userImg}")`;
    }
}

setInterval (countdown, 1000);