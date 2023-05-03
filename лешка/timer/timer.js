const timerText = document.querySelector(".timer-text");
const startBtn = document.querySelector(".timer-control-start-btn");
const stopBtn = document.querySelector(".timer-control-stop-btn");
const resetBtn = document.querySelector(".timer-control-reset-btn");

let seconds = 0;
let intervalId;

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    timerText.textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  seconds = 0;
  timerText.textContent = formatTime(seconds);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);