const parseSelectedRoute = function(activatedRoute) {
    let selectedView = activatedRoute.split('-');
    selectedView = `${selectedView[0]}-view`;

    return selectedView;
}

export {
    parseSelectedRoute
}