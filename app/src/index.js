// Load Route Controller
const viewRouteController = require('./modules/view/viewRouteController');

// Load State Controller
const state = require('./modules/state/stateController');

// Register event listeners for routes
viewRouteController.registerListeners();

// Load view saved in state if exists or load home view on browser refresh
viewRouteController.loadCurrentView();

// DEVBUTTONS ------------------------------------------------------
// Register Event Listener for Reset State button
document.querySelector('#reset-state-btn').addEventListener('click', () => {
    state.clearState();
    viewRouteController.loadCurrentView();
});
// Register Event Listener for Log State button
document.querySelector('#log-state-btn').addEventListener('click', () => {
    state.logState();
    viewRouteController.loadCurrentView();
});
// DEVBUTTONS ------------------------------------------------------
