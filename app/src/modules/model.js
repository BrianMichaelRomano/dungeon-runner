const setCurrentView = function(activeView) {
    localStorage.setItem('view', JSON.stringify(activeView));
}

const getCurrentView = function() {
    if(localStorage.getItem('view')) {
        return JSON.parse(localStorage.getItem('view'));
    } else {
        return 'home-view';
    }
}

export {
    setCurrentView,
    getCurrentView
}