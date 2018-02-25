// Load view selectors
const viewEl = require('./viewSelectors');
// Load view renderer functions
const viewRenderer = require('./viewRenderer');
// Load State Controller
const stateController = require('../state/stateController');
// Load all views
const homeView = require('./views/homeView');
const dungeonView = require('./views/dungeonView');
const characterView = require('./views/characterView');
const shopView = require('./views/shopView');
const inventoryView = require('./views/inventoryView');

module.exports = {
    registerListeners: function() {
        // register event listeners that will render selected view and set that view to state
        // Home Route
        viewEl.homeBtn.addEventListener('click', () => {
            viewRenderer(homeView);
            stateController.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView);
            stateController.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView);
            stateController.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView);
            stateController.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView);
            stateController.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home if no saved state
    loadCurrentView() {
        console.log('Loading view from saved state...');
        if(stateController.getViewState() === null) {
            viewRenderer(homeView);
        } else {
            switch(stateController.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView);
                    break;
                case 'character':
                    viewRenderer(characterView);
                    break;
                case 'shop':
                    viewRenderer(shopView);
                    break;
                case 'inventory':
                    viewRenderer(inventoryView);
                    break;
                default:
                    viewRenderer(homeView);
            }
        }
    }
}