import { 
    createStateObject,
    getPropertyValue,
    setPropertyValue 
} from './utils.js';

// Initialize State
const initializeStateObject = function() {
    if(localStorage.getItem('dungeonRunnerState') === null) {
        setStateObject(createStateObject());
    }
}


// Set State Object Property
const setStateObjectProperty = function(value, property1, property2, property3) {
    console.log(`Dungeon property set to ${value}`);    
    setStateObject(setPropertyValue(getStateObject(), value, property1, property2, property3));
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

    // Set view property to active view
    setStateObject(setPropertyValue(getStateObject(), activeView, 'view'));
}


// Get current view saved in Local Storage
const getCurrentView = function() {

    // Return current view
    return getPropertyValue(getStateObject(), 'view')
}


// Clear state object
const clearStateObject = function() {
    localStorage.removeItem('dungeonRunnerState');
    setStateObject(createStateObject());
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
    logStateObject,
    setStateObjectProperty,
    getStateObject
}