import { updateUI } from './ui.js';

let defaultWorkDuration = 25 * 60; 
let defaultBreakDuration = 5 * 60; 
let workDuration = defaultWorkDuration;
let breakDuration = defaultBreakDuration;
let longBreakDuration = 15 * 60; 

export function updateDurations() {
  const workInput = document.getElementById('work-duration');
  const breakInput = document.getElementById('break-duration');
  
  const workTime = parseInt(workInput.value, 10);
  const breakTime = parseInt(breakInput.value, 10);

  if (workTime && workTime > 0) {
    workDuration = workTime * 60; 
  }
  
  if (breakTime && breakTime > 0) {
    breakDuration = breakTime * 60;
  }

  updateUI(workDuration, breakDuration); 
}

export function resetToDefaults() {
  workDuration = defaultWorkDuration;
  breakDuration = defaultBreakDuration;
}

export function getWorkDuration() {
    const workInput = document.getElementById('work-duration');
    let value = workInput ? parseInt(workInput.value, 10) : 25;
  
    if (isNaN(value) || value <= 0) {
      console.warn("Invalid input for work duration, using default 25.");
      value = 25;
    }
    return value;
  }
  
  export function getBreakDuration() {
    const breakInput = document.getElementById('break-duration');
    let value = breakInput ? parseInt(breakInput.value, 10) : 5;
  
    if (isNaN(value) || value <= 0) {
      console.warn("Invalid input for break duration, using default 5.");
      value = 5;
    }
    return value;
  }

export { workDuration, breakDuration, longBreakDuration };
