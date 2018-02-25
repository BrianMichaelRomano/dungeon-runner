module.exports = {
    // Set view state
    setViewState(view) {
        localStorage.setItem('view', JSON.stringify(view));
    },
    // Get view state
    getViewState() {
        return JSON.parse(localStorage.getItem('view'));
    }
}