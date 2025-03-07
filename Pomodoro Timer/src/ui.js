export function updateUI(workDuration, breakDuration) {
    const display = document.getElementById('timer-display');
    
    let minutes = Math.floor(workDuration / 60);
    let seconds = workDuration % 60;
    
    display.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }