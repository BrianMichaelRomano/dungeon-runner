// View Module
import { loadNavListener, loadCurrentView } from './modules/view.js';
// Model Module
import { setCurrentView, getCurrentView } from './modules/model.js';

// View Init
const viewInit = function() {
    const currentRoute = getCurrentView();
    console.log('Init view...')
}

// View Selected
const viewSelected = function(activeView) {
    setCurrentView(activeView);
}

// =============================================================================

// Load Navigation listener
loadNavListener();

// Load current view
viewInit();


export {
    viewSelected
}