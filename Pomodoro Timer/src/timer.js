import { workDuration, breakDuration, longBreakDuration, resetToDefaults } from './settings.js';
import { updateUI } from './ui.js';

let timerInterval;
let timeLeft = workDuration;
let currentMode ='work';

export function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timeLeft = workDuration; 
  currentMode = 'work'; 

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      playSound();

      if (currentMode === 'work') {
        if (workDuration === 4) { 
          timeLeft = longBreakDuration;
        } else {
          timeLeft = breakDuration;
        }
        currentMode = 'break';
      } else {
        timeLeft = workDuration;
        currentMode = 'work';
      }
    }

    updateUI(timeLeft);
  }, 1000);
}

export function pauseTimer() {
  clearInterval(timerInterval);
}

export function resetTimer() {
  clearInterval(timerInterval);
  currentMode = 'work'; 
  timeLeft = workDuration; 
  updateUI(timeLeft);
}

function playSound() {
  const audio = new Audio('notification.mp3');
  audio.play();
}
