export function allControlsDisplay ({
  buttonPauseTimer,
  buttonPlayTimer,
}) {

  function pause () {
    buttonPauseTimer.style.display = "none"
    buttonPlayTimer.style.display = "block"
  }

  function play () {
    buttonPlayTimer.style.display = "none"
    buttonPauseTimer.style.display = "block"
  }

  
  return {
    play,
    pause,
  }

}