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
    // Get State Object    
    const stateObject = getStateObject();
    // Set view property to active view
    stateObject.view = activeView;
    // Save stateObject
    setStateObject(stateObject);
}


// Get current view saved in Local Storage
const getCurrentView = function() {
    // Get State Object
    const stateObject = getStateObject();
    // Return current view
    return stateObject.view;
}


// Clear state object
const clearStateObject = function() {
    localStorage.removeItem('dungeonRunnerState');
}


// Log State Object
const logStateObject = function() {
    console.table(getStateObject());
}


export {
    setCurrentView,
    getCurrentView,
    initializeStateObject,
    clearStateObject,
    logStateObject
}