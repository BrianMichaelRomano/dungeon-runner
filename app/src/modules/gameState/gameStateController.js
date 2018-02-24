const PlayerModel = require('../models/playerModel');

module.exports = class GameStateController {
    constructor() {
        
    }

    loadSavedGame() {
        
        let gameState;
        
        if(localStorage.getItem('DRstate')) {
            console.log('Loading saved game...');
            gameState = JSON.parse(localStorage.getItem('DRstate'));
        } else {
            gameState = {
                player: new PlayerModel('Firecore'),
                state: 'newGame'
            };
        }
        console.log('Game State loaded.');

        return gameState;
    }

    loadPlayer() {
        return this.gameState.player;
    }

    saveGameState(gameState) {
        console.log('Saving game...');
        localStorage.setItem('DRstate', JSON.stringify(gameState));
        console.log('Game saved.');
    }
}