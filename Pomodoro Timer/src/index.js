import { startTimer, pauseTimer, resetTimer } from './timer.js';
import { updateDurations, resetToDefaults } from './settings.js';
import { updateUI } from './ui.js';

document.getElementById('start-btn').addEventListener('click', () => {
  updateDurations(); 
  startTimer(); 
});
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', () => {
  resetTimer();
  resetToDefaults(); 
  updateUI(); 
});

document.getElementById('work-duration').addEventListener('change', updateDurations);
document.getElementById('break-duration').addEventListener('change', updateDurations);

updateDurations(); 