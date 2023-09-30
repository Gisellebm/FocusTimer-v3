import state from "./state.js"
import * as events from "./events.js"

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    events.registerControls()
}