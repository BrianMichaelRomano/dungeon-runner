// Required Modules
const ViewController = require('./modules/view/viewController');
const GameStateController = require('./modules/gameState/gameStateController');

// Intantiations
const gameState = new GameStateController();
const view = new ViewController();

// Load gameState if saved exists or creates new gameState
const loadedGameState = gameState.loadSavedGame();
// load player from gameState
const player = loadedGameState.player;

// Event Listeners
// toggle character sheet
view.characterBtn.addEventListener('click', () => {
    view.toggleCharacterSheet();
});

    // Render Player Attributes to  view
view.renderAttributes(player);
view.renderStatistics(player.getCalculatedStats());