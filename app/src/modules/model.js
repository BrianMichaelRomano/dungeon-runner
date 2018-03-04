// Set current view to Local Storage
const setCurrentView = function(activeView) {
    localStorage.setItem('view', JSON.stringify(activeView));
}


// Get current view saved in Local Storage
const getCurrentView = function() {
    // Check for saved value in local storage and return it
    if(localStorage.getItem('view')) {
        return JSON.parse(localStorage.getItem('view'));
    } else {
        // else return home view
        return 'home-view';
    }
}

export {
    setCurrentView,
    getCurrentView
}