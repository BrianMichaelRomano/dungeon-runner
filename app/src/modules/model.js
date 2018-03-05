import { createStateObject } from './utils.js';

// Initialize State
const initializeStateObject = function() {
    if(localStorage.getItem('dungeonRunnerState') === null) {
        const stateObject = createStateObject();
        setStateObject(stateObject);
    }
}

// Set State Object
const setStateObject = function(stateObject) {
    localStorage.setItem('dungeonRunnerState', JSON.stringify(stateObject));    
}


// Get State Object
const getStateObject = function() {
    return JSON.parse(localStorage.getItem('dungeonRunnerState'));    
}


// Set current view to Local Storage
const setCurrentView = function(activeView) {
    const stateObject = getStateObject();
    stateObject.view = activeView;
    setStateObject(stateObject);
}


// Get current view saved in Local Storage
const getCurrentView = function() {
    // Get State Object
    const stateObject = JSON.parse(localStorage.getItem('dungeonRunnerState'));
    // Return current view
    return stateObject.view;
}


export {
    setCurrentView,
    getCurrentView,
    initializeStateObject
}