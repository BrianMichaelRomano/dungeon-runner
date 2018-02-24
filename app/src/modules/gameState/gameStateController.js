const PlayerModel = require('../models/playerModel');

module.exports = class GameStateController {
    constructor() {
        
    }

    loadSavedGame() {
        console.log('Loading saved game...');

        let gameState;

        if(localStorage.getItem('DRstate')) {
            console.log('There is a saved game.');
        } else {
            gameState = {
                player: new PlayerModel('Firecore'),
                state: 'newGame'
            };
        }

        console.log('Saved Game Loaded...');

        return gameState;
    }

    loadPlayer() {
        return this.gameState.player;
    }
}