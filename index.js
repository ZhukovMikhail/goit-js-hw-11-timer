//=========================== пишем таймер обратного отсчета =================
const refs = {
  Days: document.querySelector('[data-value="days"]'),
  Hours: document.querySelector('[data-value="hours"]'),
  Minutes: document.querySelector('[data-value="mins"]'),
  Seconds: document.querySelector('[data-value="secs"]'),
};

let intervalId = null;
let days = null;
let hours = null;
let mins = null;
let secs = null;

const targetDate = new Date(2021, 7, 7, 0, 57, 25, 0);
const time = function () {
  return targetDate.getTime() - Date.now();
};

startTimer(time);

function startTimer() {
  if (time() <= 0) {
    refs.Days.textContent = '00';
    refs.Hours.textContent = '00';
    refs.Minutes.textContent = '00';
    refs.Seconds.textContent = '00';
    clearInterval(intervalId);
    return;
  }
  intervalId = setInterval(() => {
    days = Math.floor(time() / (1000 * 60 * 60 * 24));
    hours = Math.floor((time() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    mins = Math.floor((time() % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((time() % (1000 * 60)) / 1000);

    refs.Days.textContent = `${days}`;
    refs.Hours.textContent = `${hours}`;
    refs.Minutes.textContent = `${mins}`;
    refs.Seconds.textContent = `${secs}`;

    console.log(`дней ${days}, часов ${hours}, минут ${mins}, секунд ${secs}`);
  }, 1000);
}
