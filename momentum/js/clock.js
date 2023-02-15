const clock = document.getElementById("clock");

function timeSet() {
  const time = new Date();

  const hr = time.getHours();
  const min = time.getMinutes();
  const hrStr = hr < 10 ? `0${hr}` : hr;
  const minStr = min < 10 ? `0${min}` : min;
  clock.innerText = `${hrStr}:${minStr}`;
}

function showClock() {
  timeSet();
  setInterval(timeSet, 1000);
}

showClock();
