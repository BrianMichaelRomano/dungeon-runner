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


// Get a property from an object
const getObjectPropertyValue = function(object, ...args) {
    
    const arguments = args;

    if(args[2]) {
        return object[args[0]][args[1]][args[2]];
    } else if(args[1]) {
        return object[args[0]][args[1]];
    } else {
        return object[args[0]];
    }
}

// Create State Object
const createStateObject = function() {
    const state = {
        dungeon: {
            turn: 0,
            status: 'entrance'
        },
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