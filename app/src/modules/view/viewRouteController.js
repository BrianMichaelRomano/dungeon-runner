const viewEl = require('./viewSelectors');

module.exports = function() {
// register event listeners
    // Home Route
    viewEl.homeBtn.addEventListener('click', () => {
        console.log('Home clicked!');
    });

    // Dungeon Route
    viewEl.dungeonBtn.addEventListener('click', () => {
        console.log('Dungeon clicked!');
    });

    // Character Route
    viewEl.characterBtn.addEventListener('click', () => {
        console.log('Character clicked!');
    });

    // Shop Route
    viewEl.shopBtn.addEventListener('click', () => {
        console.log('Shop clicked!');
    });

    // Inventory Route
    viewEl.inventoryBtn.addEventListener('click', () => {
        console.log('Inventory clicked!');
    });
}