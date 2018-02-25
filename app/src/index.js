// Required Modules
const ViewController = require('./modules/view/viewController');
const GameStateController = require('./modules/gameState/gameStateController');
const StatsController = require('./modules/stats/statsController');

// Intantiations
const gameState = new GameStateController();
const view = new ViewController();
const stats = new StatsController();

// Load gameState if saved exists or creates new gameState
const currentGameState = gameState.loadGameState();
// load player from gameState
const player = currentGameState.player;

// Event Listeners
// toggle character sheet
view.characterBtn.addEventListener('click', () => {
    view.toggleCharacterSheet();
});

// Toggle Dungeon Run
view.dungeonRunBtn.addEventListener('click', () => {
    view.toggleDungeonRunDisplay();
});

// Render Player Attributes to  view
view.renderAttributes(player);
view.renderStatistics(stats.getCalculatedStats(player));

// Save Game state to local storage 
gameState.saveGameState(currentGameState);

// Log current game state to console
console.log('Current Game State: ', currentGameState);