const textEl = document.getElementById('text');
const startBtn = document.getElementById('start-btn');
const wpmEl = document.getElementById('wpm');

let timeStart, timeEnd, timeElapsed, wordCount, wordsPerMinute;

function startTimer() {
  // Disable the start button
  startBtn.disabled = true;

  // Get the current time
  timeStart = Date.now();

  // Add event listener for when the text is changed
  textEl.addEventListener('input', onTextChange);
}

function onTextChange() {
  // Count the number of words in the text
  wordCount = textEl.value.trim().split(/\s+/).length;

  // Get the current time
  timeEnd = Date.now();

  // Calculate the time elapsed in seconds
  timeElapsed = (timeEnd - timeStart) / 1000;

  // Calculate the words per minute
  wordsPerMinute = Math.round((wordCount / timeElapsed) * 60);

  // Display the words per minute
  wpmEl.textContent = `WPM: ${wordsPerMinute}`;
}

startBtn.addEventListener('click', startTimer);
