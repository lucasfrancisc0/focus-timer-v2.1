export function timerControl ({
  minutesDisplay,
  secondsDisplay
}) {
  let timerTimeOut;

  function updateDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown (minutesDisplay, secondsDisplay) {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    timerTimeOut = setTimeout(() => {

      if(seconds <= 0) {
        seconds = 60
        if(minutes <= 0) {
          return
      }

      
        updateDisplay(minutes--)
      }

    updateDisplay(minutes, --seconds)

    countdown(minutesDisplay, secondsDisplay)
    

    },1000)

    
  }

  function hold () {
    clearTimeout(timerTimeOut)
  }

  function addTime() {
    let minutes = Number(minutesDisplay.textContent)
    minutes++
    updateDisplay(minutes, 0)
    countdown(minutesDisplay, secondsDisplay)
  }

  function reduceTime() {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes > 0) {
      minutes--
    }
    updateDisplay(minutes, 0)
    countdown(minutesDisplay, secondsDisplay)
  }

  function resetDisplay () {
    let minutes = 0
    let seconds = 0
    updateDisplay(minutes, seconds)
  }


  return {
    updateDisplay,
    countdown,
    hold,
    addTime,
    reduceTime,
    resetDisplay
  }


}
