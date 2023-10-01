import state from "./state.js"
import * as elements from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countdown() {

    if (!state.isRunning) {
        return
    }
    
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if (seconds < 0) {
        minutes--
        seconds = 59
    }
    if (minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}

export function incrementTimer() {
    let minutes = Number(elements.minutes.textContent)
    minutes = minutes + 5
    if (minutes > 60) {
        alert("Não é possível acrescentar mais minutos");
        return
    }
    updateDisplay(minutes, 0)
}

export function decrementTimer() {
    let minutes = Number(elements.minutes.textContent)
    minutes = minutes - 5
    if (minutes < 5) {
        alert("O tempo mínimo é de 5 minutos");
        return
    }
    updateDisplay(minutes, 0)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.seconds.textContent = String(seconds).padStart(2, "0")
}