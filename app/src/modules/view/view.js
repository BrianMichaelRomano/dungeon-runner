// Shows view passed in as argument
const showActiveView = function(routeClicked) {
    let selectedView = routeClicked.split('-');
    selectedView = `${selectedView[0]}-view`;
    document.querySelector(`#${selectedView}`).style.display = 'flex';

    return selectedView;
}

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
export {
    loadNavListener
};