//=========================== пишем таймер обратного отсчета =================
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      Days: document.querySelector('[data-value="days"]'),
      Hours: document.querySelector('[data-value="hours"]'),
      Minutes: document.querySelector('[data-value="mins"]'),
      Seconds: document.querySelector('[data-value="secs"]'),
      timerId: document.querySelector('#timer-1'),
      body: document.querySelector('body'),
    };
    this.intervalId = null;
    this.days = null;
    this.hours = null;
    this.mins = null;
    this.secs = null;

    this.time = function () {
      return this.targetDate.getTime() - Date.now();
    };
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.time() <= 0) {
        this.refs.Days.textContent = '00';
        this.refs.Hours.textContent = '00';
        this.refs.Minutes.textContent = '00';
        this.refs.Seconds.textContent = '00';
        clearInterval(this.intervalId);
        this.refs.timerId.insertAdjacentHTML(
          'beforebegin',
          '<h1 class="text">Time is up, you didn`t make it!!!</h1><h2>!!--=BOOM=--!!</h2>',
        );
        this.refs.body.classList.add('bg-body');
        return;
      }
      this.refs.body.classList.remove('bg-body');
      this.days = Math.floor(this.time() / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.time() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      this.mins = Math.floor((this.time() % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((this.time() % (1000 * 60)) / 1000);

      this.refs.Days.textContent =
        this.days < 10 ? `0 ${this.days}` : `${this.days}`;
      this.refs.Hours.textContent =
        this.hours < 10 ? `0 ${this.hours}` : `${this.hours}`;
      this.refs.Minutes.textContent =
        this.mins < 10 ? `0 ${this.mins}` : `${this.mins}`;
      this.refs.Seconds.textContent =
        this.secs < 10 ? `0 ${this.secs}` : `${this.secs}`;

      console.log(
        `дней ${this.days}, часов ${this.hours}, минут ${this.mins}, секунд ${this.secs}`,
      );
    }, 1000);
  }
}

//================= new timer ================= //
const test = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 17, 2021'),
});

test.startTimer();
// console.log(test.time());
