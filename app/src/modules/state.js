// Default State Object
const defaultState = {
    // Last Saved Route
    route: 'home',
    dungeonStatus: 'entrance'
}

// Accepts a route and saves it to state
function setRoute(route) {
    // get current state
    const state = getState();
    // set recived route to state object
    state.route = route;
    // save updated state
    setState(state);
}

// Gets last saved route
function getRoute() {
    // get current state
    const state = getState();
    // return route from state
    return state.route;
}

// Gets current state or sets and returns default state
function getState() {
    // if current state does not exists 
    if(!localStorage.getItem('DRstate')) {
        // set default state
        setState(defaultState);
        // return state
        return getState();
    } else {
        // return state
        return JSON.parse(localStorage.getItem('DRstate'));
    }
}

// Accepts state object and sets to localStorage 
function setState(state) {
    // set state to localStorage
    localStorage.setItem('DRstate', JSON.stringify(state));
}

// Logs state to console
function logState() {
    console.table(getState());
}

// Clears saved state object from localStorage 
function clearState() {
    localStorage.removeItem('DRstate');
    location.reload();
}

// Exports
export {
    setRoute,
    getRoute,
    logState,
    clearState,
    getState,
    setState
}