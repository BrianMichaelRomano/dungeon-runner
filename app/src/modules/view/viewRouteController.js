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
            viewRenderer(homeView.template);
            stateController.view.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView.template);
            dungeonView.dungeonController.loadListeners();            
            stateController.view.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView.template);
            stateController.view.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView.template);
            stateController.view.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView.template);
            stateController.view.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home on browser refresh if no saved state
    loadCurrentView() {

        if(stateController.view.getViewState() === null) {
            viewRenderer(homeView.template);
        } else {
            switch(stateController.view.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView.template);
                    dungeonView.dungeonController.loadListeners();
                    break;
                case 'character':
                    viewRenderer(characterView.template);
                    break;
                case 'shop':
                    viewRenderer(shopView.template);
                    break;
                case 'inventory':
                    viewRenderer(inventoryView.template);
                    break;
                default:
                    viewRenderer(homeView.template);
            }
        }
    }
}