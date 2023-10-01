import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function stopCounter() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function plusMinutes() {
    console.log("plusMinutes Function");
    timer.incrementTimer()
    sounds.buttonPressAudio.play()
}

export function minusMinutes() {
    console.log("minusMinutes Function");
    timer.decrementTimer()
    sounds.buttonPressAudio.play()
}

export function PlayForestSound() {
    state.isPlaying = document.documentElement.classList.toggle('playing')
    console.log("PlayForest Function");
    if (state.isPlaying) {
        sounds.forestMusic.pause()
        return
    }
    sounds.forestMusic.play()
   
}

export function playRainSound() {
    state.isPlaying = document.documentElement.classList.toggle('playing')
    console.log("PlayForest Function");
    if (state.isPlaying) {
        sounds.forestMusic.pause()
        return
    }
    sounds.forestMusic.play()
   
}