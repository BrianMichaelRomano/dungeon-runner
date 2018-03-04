// View Module
import { loadNavListener, loadCurrentView } from './view.js';
// Model Module
import { setCurrentView, getCurrentView } from './model.js';


// Load Navigation Listeners
const navListenerInit = function() {
    // Call view to load Navigation listeners
    loadNavListener();
}


// Initialize View
const viewInit = function() {
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
    console.log('Dungeon Listeners initialized...');
}


// Render Dungeon
const renderDungeon = function() {
    // Get state

    // Render view

    console.log('Dungeon Rendered...');
}

export {
    viewInit,
    viewSelected,
    navListenerInit,
    renderDungeon,
    dungeonListenerInit
}