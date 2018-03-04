// Sets the active view element to flex
    // Takes one argument which is the ID of button pressed
    // Parses that ID into a corasponding view ID
    // Example: #home-btn will be parsed to #home-view
    // Then sets that view element display to flex
    // Then returns selectedView 
const showActiveView = function(routeClicked) {
    let selectedView = routeClicked.split('-');
    selectedView = `${selectedView[0]}-view`;
    document.querySelector(`#${selectedView}`).style.display = 'flex';

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