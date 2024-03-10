const countdownTimer = document.getElementById("countdown-timer");

var countdownDate;

function setCountdownDate() {
  fetch("/getCountdown")
    .then(response => response.text())
    .then(text => {
      countdownDate = Date.parse(text);
    })
    .catch(error => {
      console.error(error);
    })
}

function setCountdownTimer() {
  const date = new Date();
  const easternTimeString = date.toLocaleString("en-us", {timezone: "America/New_York"});
  const easternTimeNow = Date.parse(easternTimeString);

  const timeDifference = (countdownDate - easternTimeNow) / 1000;
  let seconds = timeDifference % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let minutes = Math.floor(timeDifference / 60) % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let hours = Math.floor(timeDifference / 3600) % 60;
  hours = hours < 10 ? "0" + hours : hours;

  countdownTimer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

window.onload = function() {
  setCountdownDate();
};

setInterval(() => {
  setCountdownTimer();
}, 1000);
