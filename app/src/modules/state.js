const newState = {
    route: 'home'
}

function setRoute(route) {
    const state = getState();
    state.route = route;
    setState(state);
}

function getRoute() {
    const state = getState();
    return state.route;
}

function getState() {
    if(!localStorage.getItem('DRstate')) {
        setState(newState);
        return getState();
    } else {
        return JSON.parse(localStorage.getItem('DRstate'));
    }
}

function setState(state) {
    localStorage.setItem('DRstate', JSON.stringify(state));
}

export {
    setRoute,
    getRoute
}