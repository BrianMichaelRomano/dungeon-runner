import { loadNavListener } from './view.js';

import { setCurrentView, getCurrentView } from './model.js';

// Load Navigation Listeners
const navListenersInit = function() {
    loadNavListener();
}

// View Init
const viewInit = function() {
    const currentRoute = getCurrentView();
    console.log('Init view...')
}

// View Selected
const viewSelected = function(activeView) {
    setCurrentView(activeView);
}

export {
    viewInit,
    viewSelected,
    navListenersInit
}