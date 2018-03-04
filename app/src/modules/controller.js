import { loadNavListener, loadCurrentView } from './view.js';

import { setCurrentView, getCurrentView } from './model.js';

// Load Navigation Listeners
const navListenersInit = function() {
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

export {
    viewInit,
    viewSelected,
    navListenersInit
}