// Load view selectors
const viewEl = require('./viewSelectors');
// Load view renderer functions
const viewRenderer = require('./viewRenderer');
// Load State Controller
const stateController = require('../state/stateController');
// Load all views
const homeView = require('../components/homeComponent');
const dungeonView = require('../components/dungeon/dungeonView');
const dungeonController = require('../components/dungeon/dungeonController');
const characterView = require('../components/character/characterView');
const shopView = require('../components/shopComponent');
const inventoryView = require('../components/inventoryComponent');

module.exports = {
    registerListeners: function() {
        // register event listeners that will render selected view and set that view to state
        // Home Route
        viewEl.homeBtn.addEventListener('click', () => {
            viewRenderer(homeView.viewTemplate());
            stateController.view.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView());
            dungeonController.loadListeners();            
            stateController.view.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView());
            stateController.view.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView.viewTemplate());
            stateController.view.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView.viewTemplate());
            stateController.view.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home on browser refresh if no saved state
    loadCurrentView() {

        if(stateController.view.getViewState() === null) {
            viewRenderer(homeView.viewTemplate());
        } else {
            switch(stateController.view.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView());
                    dungeonController.loadListeners();
                    break;
                case 'character':
                    viewRenderer(characterView());
                    break;
                case 'shop':
                    viewRenderer(shopView.viewTemplate());
                    break;
                case 'inventory':
                    viewRenderer(inventoryView.viewTemplate());
                    break;
                default:
                    viewRenderer(homeView.viewTemplate());
            }
        }
    }
}