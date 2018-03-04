import { loadNavListener } from './view.js';

import { setCurrentView, getCurrentView } from './model.js';

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
    viewSelected
}