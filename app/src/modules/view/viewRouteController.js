// Load view selectors
const viewEl = require('./viewSelectors');
// Load view renderer functions
const viewRenderer = require('./viewRenderer');
// Load all views
const homeView = require('./views/homeView');
const dungeonView = require('./views/dungeonView');
const characterView = require('./views/characterView');
const shopView = require('./views/shopView');
const inventoryView = require('./views/inventoryView');

module.exports = function() {
// register event listeners
    // Home Route
    viewEl.homeBtn.addEventListener('click', () => {
        viewRenderer(homeView);
    });

    // Dungeon Route
    viewEl.dungeonBtn.addEventListener('click', () => {
        viewRenderer(dungeonView);
    });

    // Character Route
    viewEl.characterBtn.addEventListener('click', () => {
        viewRenderer(characterView);
    });

    // Shop Route
    viewEl.shopBtn.addEventListener('click', () => {
        viewRenderer(shopView);
    });

    // Inventory Route
    viewEl.inventoryBtn.addEventListener('click', () => {
        viewRenderer(inventoryView);
    });
}