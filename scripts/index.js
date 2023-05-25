const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const buttonPlayTimer = document.querySelector('#buttonPlay')
const buttonPauseTimer = document.querySelector('#buttonPause')
const buttonStopTimer = document.querySelector('#buttonStop')
const buttonAddTime = document.querySelector('#buttonAddTime')
const buttonReduceTime = document.querySelector('#buttonReduceTime')
let timerTimeOut;


function timerControl () {

  function pause () {
    buttonPauseTimer.style.display = "none"
    buttonPlayTimer.style.display = "block"
  }

  function play () {
    buttonPlayTimer.style.display = "none"
    buttonPauseTimer.style.display = "block"
  }

  function updateDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetDisplay () {
    let minutes = 0
    let seconds = 0
    updateDisplay(minutes, seconds)
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
    clearTimeout(timerTimeOut)
    minutes++
    updateDisplay(minutes, 0)
    countdown(minutesDisplay, secondsDisplay)
  }

  function reduceTime() {
    let minutes = Number(minutesDisplay.textContent)
    clearTimeout(timerTimeOut)
    if(minutes > 0) {
      minutes--
    }
    updateDisplay(minutes, 0)
    countdown(minutesDisplay, secondsDisplay)
  }

  return {
    addTime,
    reduceTime,
    countdown,
    timerTimeOut,
    play,
    pause,
    resetDisplay
  }


}

const timer = timerControl()

buttonPlayTimer.addEventListener('click', () => {
  timer.play()
  timer.countdown(minutesDisplay, secondsDisplay)
})

buttonPauseTimer.addEventListener('click', () =>{
  timer.pause()
  clearTimeout(timerTimeOut)
})

buttonStopTimer.addEventListener('click', () =>{
  clearTimeout(timerTimeOut)
  timer.resetDisplay()
  timer.pause()
})

buttonAddTime.addEventListener('click', () => {
  timer.addTime()
})

buttonReduceTime.addEventListener('click', () => {
  timer.reduceTime()
})

