import {
    logState,
    clearState
} from './state.js';

function addDevListeners() {
    document.querySelector('#logState-btn').addEventListener('click', logState);
    document.querySelector('#clearState-btn').addEventListener('click', clearState);
}

export {
    addDevListeners
}