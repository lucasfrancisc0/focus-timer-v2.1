import { allControlsDisplay } from "./controls.js"
import { timerControl } from "./timer.js"
import { 
  buttonPlayTimer, 
  buttonPauseTimer,
  buttonAddTime,
  buttonReduceTime,
  buttonStopTimer,
  minutesDisplay,
  secondsDisplay } from "./elements.js"

const controls = allControlsDisplay({
  buttonPauseTimer,
  buttonPlayTimer,
})

const timer = timerControl({
  minutesDisplay,
  secondsDisplay,
})

buttonPlayTimer.addEventListener('click', () => {
  controls.play()
  timer.countdown(minutesDisplay, secondsDisplay)
})

buttonPauseTimer.addEventListener('click', () =>{
  controls.pause()
  timer.hold()
})

buttonStopTimer.addEventListener('click', () =>{
  timer.hold()
  timer.resetDisplay()
  controls.pause()
})

buttonAddTime.addEventListener('click', () => {
  timer.hold()
  timer.addTime()
  controls.play()
})

buttonReduceTime.addEventListener('click', () => {
  timer.hold()
  timer.reduceTime()
  controls.play()
})

