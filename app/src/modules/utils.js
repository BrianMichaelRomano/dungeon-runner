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
const getPropertyValue = function(object, ...args) {

    if(args[2]) {
        return object[args[0]][args[1]][args[2]];
    } else if(args[1]) {
        return object[args[0]][args[1]];
    } else {
        return object[args[0]];
    }
}


// Set a property from an object
const setPropertyValue = function(object, value, ...args) {

    const newObj = object;

    if(args[2]) {
        newObj[args[0]][args[1]][args[2]] = value;
        return newObj;
    } else if(args[1]) {
        newObj[args[0]][args[1]] = value;
        return newObj;
    } else {
        newObj[args[0]] = value;
        return newObj;
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
    createStateObject,
    getPropertyValue,
    setPropertyValue
}