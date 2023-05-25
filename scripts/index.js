const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const buttonPlayTimer = document.querySelector('#buttonPlay')
const buttonStopTimer = document.querySelector('#buttonStop')
const buttonAddTime = document.querySelector('#buttonAddTime')
const buttonReduceTime = document.querySelector('#buttonReduceTime')
let timerTimeOut;


function timerControl () {

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

  function addTime() {
    let minutes = Number(minutesDisplay.textContent)
    minutes++
    updateDisplay(minutes, 0)
    
  }

  function reduceTime() {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes > 0) {
      minutes--
    }
    updateDisplay(minutes, 0)
  }

  return {
    addTime,
    reduceTime,
    countdown,
    timerTimeOut
  }


}

const timer = timerControl()

buttonPlayTimer.addEventListener('click', () => {
  timer.countdown(minutesDisplay, secondsDisplay)
})

buttonStopTimer.addEventListener('click', () =>{
  clearTimeout(timerTimeOut)
})

buttonAddTime.addEventListener('click', () => {
  timer.addTime()
})

buttonReduceTime.addEventListener('click', () => {
  timer.reduceTime()
})

