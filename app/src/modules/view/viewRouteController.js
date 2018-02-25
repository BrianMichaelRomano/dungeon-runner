const viewEl = require('./viewSelectors');
const viewRenderer = require('./viewRenderer');

module.exports = function() {
// register event listeners
    // Home Route
    viewEl.homeBtn.addEventListener('click', () => {
        console.log('Home clicked!');
        viewRenderer.renderHome();
    });

    // Dungeon Route
    viewEl.dungeonBtn.addEventListener('click', () => {
        console.log('Dungeon clicked!');
        viewRenderer.renderDungeon();
    });

    // Character Route
    viewEl.characterBtn.addEventListener('click', () => {
        console.log('Character clicked!');
        viewRenderer.renderCharacter();
    });

    // Shop Route
    viewEl.shopBtn.addEventListener('click', () => {
        console.log('Shop clicked!');
        viewRenderer.renderShop();
    });

    // Inventory Route
    viewEl.inventoryBtn.addEventListener('click', () => {
        console.log('Inventory clicked!');
        viewRenderer.renderInventory();
    });
}