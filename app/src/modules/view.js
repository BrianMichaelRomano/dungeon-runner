// Controller Module
import {
    viewSelected,
    logStateBtnPressed,
    clearStateBtnPressed,
    runDungeonBtnClick,
    attackBtnClick,
    defenseBtnClick,
    magicBtnClick,
    itemBtnClick,
    fleeBtnClick
} from './controller.js';

// Utils Module
import {
    parseSelectedRoute 
} from './utils.js';


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
    // loop through routes and set inactive route display to none
    routes.forEach((view) => {
        if(view !== activeView) {
            document.querySelector(`#${view}`).style.display = 'none';    
        }
    });
}


// Load Development Listeners
const loadDevListeners = function() {
    document.querySelector('#logState-btn').addEventListener('click', () => {
        logStateBtnPressed();
    });

    document.querySelector('#clearState-btn').addEventListener('click', () => {
        clearStateBtnPressed();
    });
}


// Loads Navigation listeners 
const loadNavListener = function() {
    // Nav menu listener
    document.querySelector('nav').addEventListener('click', (e) => {
        // Set active view id returned after rendering view 
        const activeViewID = showActiveView(e.target.id);
        // Hide inactive views
        hideInactiveViews(activeViewID);
    });
}


// Render Dungeon Dynamic content
const renderDungeonView = function(currentStateObject) {
    console.log('Rendering dungeon view...');
}


// Loads Dungeon listeners
const loadDungeonListeners = function() {
    // Dungeon buttons listeners
    document.querySelector('#dungeon-view').addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'run-dungeon-btn':
                runDungeonBtnClick();
                break;
            case 'attack-btn':
                attackBtnClick();
                break;
            case 'defense-btn':
                defenseBtnClick();
                break;
            case 'magic-btn':
                magicBtnClick();
                break;
            case 'item-btn':
                itemBtnClick();
                break;
            case 'flee-btn':
                fleeBtnClick();
                break;

        }
        // console.log(e);
    });
}


// Exports ===================================
export {
    loadNavListener,
    loadCurrentView,
    loadDevListeners,
    loadDungeonListeners,
    renderDungeonView
};