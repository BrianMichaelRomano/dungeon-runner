// Required Modules
const ViewController = require('./modules/view/viewController');
const GameStateController = require('./modules/gameState/gameStateController');
const stats = require('./modules/stats/statsController');
const SkeletonModel = require('./modules/models/skeletonModel');
const CombatController = require('./modules/combat/combatController');

// Intantiations
const gameState = new GameStateController();
const view = new ViewController();

// Load gameState if saved exists or creates new gameState
const currentGameState = gameState.loadGameState();
// load player from gameState
const player = currentGameState.player;
const enemy = new SkeletonModel();

// Event Listeners
// toggle character sheet
view.characterBtn.addEventListener('click', () => {
    view.toggleCharacterSheet();
});

// Toggle Dungeon Display
view.enterDungeonBtn.addEventListener('click', () => {
    view.toggleDungeonDisplay();
    CombatController.combatLoop(player, enemy);
});

// Render Player Attributes to  view
view.renderAttributes(player);
view.renderStatistics(stats.getCalculatedStats(player));

// Save Game state to local storage 
gameState.saveGameState(currentGameState);

// Log current game state to console
console.log('Current Game State: ', currentGameState);