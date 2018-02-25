const viewEl = require('./viewSelectors');
const viewRenderer = require('./viewRenderer');

module.exports = function() {
// register event listeners
    // Home Route
    viewEl.homeBtn.addEventListener('click', () => {
        viewRenderer.renderHome();
    });

    // Dungeon Route
    viewEl.dungeonBtn.addEventListener('click', () => {
        viewRenderer.renderDungeon();
    });

    // Character Route
    viewEl.characterBtn.addEventListener('click', () => {
        viewRenderer.renderCharacter();
    });

    // Shop Route
    viewEl.shopBtn.addEventListener('click', () => {
        viewRenderer.renderShop();
    });

    // Inventory Route
    viewEl.inventoryBtn.addEventListener('click', () => {
        viewRenderer.renderInventory();
    });
}