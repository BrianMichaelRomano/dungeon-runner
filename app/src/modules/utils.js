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


export {
    parseSelectedRoute
}