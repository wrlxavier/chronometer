const display = document.getElementById('mainDisplay');

let hours = 0;
let minutes = 0;
let seconds = 0;

let time = 1000;
let chronometer;
let firstOnClick = 0;

function start() {
    firstOnClick++;
    if(firstOnClick==1){
        chronometer = setInterval(()=>{ timer(); }, time);
    } else {
        stop();
        start();
    }
}

function pause() {
    clearInterval(chronometer);
    firstOnClick = 0;
}

function stop() {
    clearInterval(chronometer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    firstOnClick = 0;
    display.innerText = '00:00:00';
}

const formatTimeElement = function (timeElement) {
    timeElement = (timeElement < 10 ? '0' + timeElement : timeElement );
    return timeElement;
}

function timer() {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let format = `${formatTimeElement(hours)}:${formatTimeElement(minutes)}:${formatTimeElement(seconds)}`;
    display.innerText = format;
}