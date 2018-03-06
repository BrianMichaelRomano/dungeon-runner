// Parses button ID to a view element ID and returns it
// Example Input: home-btn => Output: home-view
const parseSelectedRoute = function(activatedRoute) {
    // Splits both words into an array
    let selectedView = activatedRoute.split('-');
    // Attach '-view' to first word in array
    selectedView = `${selectedView[0]}-view`;
    // return parsed route
    return selectedView;
}


// Create State Object
const createStateObject = function() {
    const state = {
        dungeon: 'entrance',
        view: 'home-view',
        shop: {},
        inventory: {},
        character: {
            name: 'Firecore',
            HP: 100,
            AP: 80,
            MP: 60
        },
        enemy: {
            name: 'Skeleton',
            HP: 100,
            AP: 80,
            MP: 60
        },
        home: {}
    }   

    return state;
}


export {
    parseSelectedRoute,
    createStateObject
}