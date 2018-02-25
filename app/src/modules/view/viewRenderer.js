// Load View Selectors
const viewEl = require('./viewSelectors');

// Export each view render function
module.exports = function(view) {
    // Render inputed view
    viewEl.viewOutput.innerHTML = view;
}