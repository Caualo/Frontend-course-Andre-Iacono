const countdown = document.getElementById('countdown');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timer;
let remainingTime = 0;

function updateCountdown() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startCountdown() {
    timer = setInterval(function() {
        if (remainingTime > 0) {
            remainingTime--;
            updateCountdown();
        } else {
            stopCountdown();
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer);
}

function resetCountdown() {
    stopCountdown();
    remainingTime = 0;
    updateCountdown();
}

startButton.addEventListener('click',  function() {
    remainingTime = 5 * 60;
    startCountdown();
});

stopButton.addEventListener('click', function() {
    stopCountdown();
});

resetButton.addEventListener('click', function() {
    resetCountdown();
});