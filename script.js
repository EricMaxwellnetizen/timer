const startBtn = document.getElementById('startBtn');
const display = document.getElementById('display');
const alarmSound = document.getElementById('alarmSound');

startBtn.addEventListener('click', () => {
  let minutes = parseInt(document.getElementById('minutes').value) || 0;
  let seconds = parseInt(document.getElementById('seconds').value) || 0;
  let totalSeconds = minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    alert("Please enter a valid time!");
    return;
  }

  startBtn.disabled = true;

  const interval = setInterval(() => {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (totalSeconds <= 0) {
      clearInterval(interval);
      alarmSound.play();
      startBtn.disabled = false;
    }

    totalSeconds--;
  }, 1000);
});
