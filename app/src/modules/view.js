import { viewSelected } from '../index.js';
import { parseSelectedRoute } from './utils.js';

// Sets the active view element to flex
// Returns ID value of selected view
const showActiveView = function(routeClicked) {
    let selectedView = parseSelectedRoute(routeClicked);
    document.querySelector(`#${selectedView}`).style.display = 'flex';

    viewSelected(selectedView);

    return selectedView;
}

// Sets all inactive views to none
const hideInactiveViews = function(activeView) {
    const routes = [
        'home-view',
        'shop-view',
        'dungeon-view',
        'inventory-view',
        'character-view'
    ];

    routes.forEach((view) => {
        if(view !== activeView) {
            document.querySelector(`#${view}`).style.display = 'none';    
        }
    });
}

// Listens for which nav button clicked then shows that view
const loadNavListener = function() {

    document.querySelector('nav').addEventListener('click', (e) => {
        
        console.log('working...');
        const activeView = showActiveView(e.target.id);
        hideInactiveViews(activeView);
    });
}

// Exports ===================================
export {
    loadNavListener
};