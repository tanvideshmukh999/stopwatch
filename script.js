
let milliSeconds = document.querySelector(".milli-second h2");
let seconds = document.querySelector(".second h2");
let minutes = document.querySelector(".minute h2");
let hours = document.querySelector(".hour h2");
let timerStart = false;
let ms = 0,
  s = 0,
  m = 0,
  h = 0;
var timer;
function startStopWatch() {
  milliSeconds.style.transform = "scale(1.5)";
  timerStart = true;
  clearInterval(timer);
  timer = setInterval(updateStopWatch, 10);
}
function updateStopWatch() {
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
  if (m == 60) {
    m = 0;
    h++;
  }
  ms = String(ms).padStart("2", "0");
  s = String(s).padStart("2", "0");
  m = String(m).padStart("2", "0");
  h = String(h).padStart("2", "0");
  milliSeconds.innerText = ms;
  seconds.innerText = s;
  minutes.innerText = m;
  hours.innerText = h;
}

function resetStopWatch() {

  timerStart = false;
  listCount = 1;

  clearInterval(timer);
  milliSeconds.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
}
function stopStopWatch() {
  clearInterval(timer);
}
