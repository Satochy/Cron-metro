let timer;
let running = false;
let alertSound = new Audio("sounds/Alert_Sound.mp3");

function startTimer() {
    if (!running) {
        timer = setInterval(decrementTimer, 1000);
        running = true;
    }
}

function decrementTimer() {
    let timerElement = document.getElementById("timer");
    let timeArray = timerElement.textContent.split(":");
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);

    if (hours === 0 && minutes === 0 && seconds === 0) {
        stopTimer();
        showAlert();
    } else {
        if (seconds === 0) {
            if (minutes === 0) {
                hours--;
                minutes = 59;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }

        timerElement.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function setCustomTime() {
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");

    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    let isValidInput = !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds);

    if (isValidInput) {
        clearInterval(timer);
        updateTimerDisplay(hours, minutes, seconds);
    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
}

function showAlert() {
    alertSound.play();
    alert("O tempo acabou!");
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateTimerDisplay(hours, minutes, seconds) {
    let timerElement = document.getElementById("timer");
    timerElement.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function setTime(hours, minutes, seconds) {
    updateTimerDisplay(hours, minutes, seconds);
}