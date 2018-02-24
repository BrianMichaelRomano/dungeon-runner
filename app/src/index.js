// Required Modules
const PlayerModel = require('./modules/models/playerModel');
const ViewController = require('./modules/view/viewController');

// Variables
const player = new PlayerModel('Firecore');
const view = new ViewController();

// Event Listeners
view.characterBtn.addEventListener('click', () => {
    view.toggleCharacterSheet();
});

// logic
    // Render Player Attributes to  view
view.renderAttributes(player);
view.renderStatistics(player.getCalculatedStats());