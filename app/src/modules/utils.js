// Imports
import {
    logState,
    clearState
} from './state.js';

// Add listeners for development buttons
function addDevListeners() {
    document.querySelector('#logState-btn').addEventListener('click', logState);
    document.querySelector('#clearState-btn').addEventListener('click', clearState);
}

// Exports
export {
    addDevListeners
}