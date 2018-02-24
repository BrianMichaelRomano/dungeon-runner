// Required Modules
const PlayerModel = require('./modules/models/playerModel');
const ViewController = require('./modules/view/viewController');
const GameStateController = require('./modules/gameState/gameStateController');

// Intantiations
const gameState = new GameStateController();
const player = new PlayerModel('Firecore');
const view = new ViewController();

// Load Saved game if exists
gameState.loadSavedGame();

// Event Listeners
// toggle character sheet
view.characterBtn.addEventListener('click', () => {
    view.toggleCharacterSheet();
});

    // Render Player Attributes to  view
view.renderAttributes(player);
view.renderStatistics(player.getCalculatedStats());