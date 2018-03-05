// View Module
import { loadNavListener, loadCurrentView } from './view.js';
// Model Module
import { setCurrentView, getCurrentView, initializeStateObject } from './model.js';

// Initialize State Object if none exists
const stateObjectInit = function() {
    console.log('Initializing State Object...');
    initializeStateObject();
}


// Load Navigation Listeners
const navListenerInit = function() {
    // Call view to load Navigation listeners
    console.log('Initializing navigation Listeners...')    
    loadNavListener();
}


// Initialize View
const viewInit = function() {
    console.log('Initializing current route...')        
    // Get current route from model
    const currentRoute = getCurrentView();
    // Call view to load current view
    loadCurrentView(currentRoute);
}


// View Selected
const viewSelected = function(activeView) {
    // Set current view to model
    setCurrentView(activeView);
}


// Load Dungeon Listeners
const dungeonListenerInit = function() {
    console.log('Initializing dungeon listeners...');
}


// Render Dungeon
const renderDungeon = function() {
    // Get state

    // Render view

    console.log('Rendering Dungeon...');
}

export {
    viewInit,
    viewSelected,
    navListenerInit,
    renderDungeon,
    dungeonListenerInit,
    stateObjectInit
}