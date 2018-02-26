// Load Route Controller
const viewRouteController = require('./modules/view/viewRouteController');
// Register event listeners for routes
viewRouteController.registerListeners();
// Load view saved in state if exists or load home view on browser refresh
viewRouteController.loadCurrentView();