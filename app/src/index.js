// Required Modules
const PlayerModel = require('./modules/models/playerModel');
const ViewController = require('./modules/view/viewController');

// Variables
const player = new PlayerModel('Firecore');
const view = new ViewController();

// logic
    // Render Player Attributes to  view
view.renderAttributes(player);