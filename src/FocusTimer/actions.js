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
    timer.incrementTimer()
    sounds.buttonPressAudio.play()
}

export function minusMinutes() {
    console.log("minusMinutes Function");
    timer.decrementTimer()
    sounds.buttonPressAudio.play()
}

/*  Sounds Controls */

export function playForestSound() {
    elements.tree.classList.toggle('playing')
    sounds.forestMusic.play()
    
    if (!elements.tree.classList.contains('playing')) {
        sounds.forestMusic.pause()
    }
}

export function playRainSound() {
    elements.cloudRain.classList.toggle('playing')
    sounds.rainMusic.play()

    if (!elements.cloudRain.classList.contains('playing')) {
        sounds.rainMusic.pause()
    }
}

export function playCoffeeShopSound() {
    elements.coffeeShop.classList.toggle('playing')
    sounds.coffeeShopMusic.play()

    if (!elements.coffeeShop.classList.contains('playing')) {
        sounds.coffeeShopMusic.pause()
    }
}

export function playFireplaceSound() {
    elements.fireplace.classList.toggle('playing')
    sounds.fireplaceMusic.play()

    if (!elements.fireplace.classList.contains('playing')) {
        sounds.fireplaceMusic.pause()
    }
}