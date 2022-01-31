export default class Timer {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    if (this.seconds === 0 && this.minutes > 0) {
      this.seconds = 60 - 1;
      this.minutes -= 1;
    } 
    else if (this.minutes === 0 && this.seconds === 0) {
      this.stop();
     
    }
    else {
      this.seconds -= 1;
    }
    this.displayTimer();
  }

  stop() {
    clearInterval(this.timer);
  }

  displayTimer() {
    const display = document.querySelector('.display p');
    display.innerText = `${this.minutes} : ${this.seconds}`;
  }

  start() {
    this.componentDidMount();
  }
}

const timer = new Timer(30, 0);
timer.start();