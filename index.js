let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

start.addEventListener('click', watchStart);
stop.addEventListener('click', watchStop);
reset.addEventListener('click', watchReset);