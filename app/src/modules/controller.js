// View Module
import {
    loadNavListener, 
    loadDevListeners,
    loadCurrentView,
    loadDungeonListeners,
    renderDungeonView
} from './view.js';

// Model Module
import { 
    setCurrentView,
    getCurrentView,
    initializeStateObject,
    clearStateObject,
    logStateObject
} from './model.js';

// Initialize State Object if none exists
const stateObjectInit = function() {
    // Dev Log...
    console.log('Initializing State Object...');
    initializeStateObject();
}


// Load Developement Listeners
const devListenerInit = function() {
    console.log('Initializing development Listeners...');
    loadDevListeners();
}


// Load Navigation Listeners
const navListenerInit = function() {
    // Dev Log...    
    console.log('Initializing navigation Listeners...')    
    // Call view to load Navigation listeners
    loadNavListener();
}


// Load Dungeon Listeners
const dungeonListenerInit = function() {
    // Dev Log...  
    console.log('Initializing dungeon listeners...');
    loadDungeonListeners();
}


// Initialize View
const viewInit = function() {
    // Get current route from model
    const currentRoute = getCurrentView();
    // Dev Log...
    console.log(`Initializing current route ${currentRoute}...`);        
    // Call view to load current view
    loadCurrentView(currentRoute);
}


// View Selected
const viewSelected = function(activeView) {
    // Dev Log...    
    console.log(`${activeView} selected and saved...`)
    // Set current view to model
    setCurrentView(activeView);
}


// Render Dungeon
const renderDungeon = function() {
    // Dev Log...
    console.log('Rendering Dungeon...');
    // Get state

    // Render view
    renderDungeonView();
}


// Log state to console
const logStateBtnPressed = function() {
    logStateObject();
}


// Clear state Object
const clearStateBtnPressed = function() {
    clearStateObject();
    location.reload();
}


export {
    viewInit,
    viewSelected,
    navListenerInit,
    renderDungeon,
    dungeonListenerInit,
    stateObjectInit,
    devListenerInit,
    logStateBtnPressed,
    clearStateBtnPressed
}