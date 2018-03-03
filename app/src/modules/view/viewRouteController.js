// Load view selectors
const viewEl = require('./viewSelectors');
// Load view renderer functions
const viewRenderer = require('./viewRenderer');
// Load State Controller
const stateController = require('../state/stateController');
// Load all views and controllers
const homeView = require('../components/home/homeView');
const homeController = require('../components/home/homeController');
const dungeonView = require('../components/dungeon/dungeonView');
const dungeonController = require('../components/dungeon/dungeonController');
const characterView = require('../components/character/characterView');
const characterController = require('../components/character/characterController');
const shopView = require('../components/shop/shopView');
const shopController = require('../components/shop/shopController');
const inventoryView = require('../components/inventory/inventoryView');
const inventoryController = require('../components/inventory/inventoryController');

module.exports = {
    registerListeners: function() {
        // register event listeners that will render selected view and set that view to state
        // Home Route
        viewEl.homeBtn.addEventListener('click', () => {
            viewRenderer(homeView());
            stateController.view.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView.mainView());
            dungeonController.controller.renderDungeonEntrance();            
            stateController.view.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView());
            stateController.view.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView());
            stateController.view.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView());
            stateController.view.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home on browser refresh if no saved state
    loadCurrentView() {

        if(stateController.view.getViewState() === null) {
            viewRenderer(homeView());
        } else {
            switch(stateController.view.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView.mainView());
                    dungeonController.controller.renderDungeonEntrance();
                    break;
                case 'character':
                    viewRenderer(characterView());
                    break;
                case 'shop':
                    viewRenderer(shopView());
                    break;
                case 'inventory':
                    viewRenderer(inventoryView());
                    break;
                default:
                    viewRenderer(homeView());
            }
        }
    }
}