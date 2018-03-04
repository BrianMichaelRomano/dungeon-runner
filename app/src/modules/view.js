// Imports
import { viewSelected } from './controller.js';
import { parseSelectedRoute } from './utils.js';

// Render view to screen
const showActiveView = function(btnClickedID) {
    // Parse button ID clicked to corrasponding view ID
    let selectedView = parseSelectedRoute(btnClickedID);
    // Select view and set display to flex 
    document.querySelector(`#${selectedView}`).style.display = 'flex';
    // Tell controller which view has been selected
    viewSelected(selectedView);
    // Return view ID selected
    return selectedView;
}


// Accepts and render the route provided
const loadCurrentView = function(route) {
    // Render view
    const activeView = showActiveView(route);
    // Hide inactive views
    hideInactiveViews(activeView);
}


// Sets all inactive views display to none
const hideInactiveViews = function(activeView) {
    // Array of possible routes
    const routes = [
        'home-view',
        'shop-view',
        'dungeon-view',
        'inventory-view',
        'character-view'
    ];
    // loop through routes and set inactive route diplay to none
    routes.forEach((view) => {
        if(view !== activeView) {
            document.querySelector(`#${view}`).style.display = 'none';    
        }
    });
}


// Sets Navigation listeners 
const loadNavListener = function() {
    // Nav menu listener
    document.querySelector('nav').addEventListener('click', (e) => {
        // Set active view id returned after rendering view 
        const activeViewID = showActiveView(e.target.id);
        // Hide inactive views
        hideInactiveViews(activeViewID);
    });
}


// Exports ===================================
export {
    loadNavListener,
    loadCurrentView
};