const PlayerModel = require('../models/playerModel');

module.exports = class GameStateController {
    constructor() {
        
    }

    // Load game state if exists else creates new game state 
    loadGameState() {
        // game state to return
        let gameState;
        
        // Check if game state exist in localstorage
        if(localStorage.getItem('DRstate')) {
            console.log('Loading saved game...');
            // If game state exists in local storage set it to gameState 
            gameState = JSON.parse(localStorage.getItem('DRstate'));
        } else {
            // Set gameState to new gameState if no gameState in localStorage
            gameState = {
                player: new PlayerModel('Firecore'),
                state: 'newGame'
            };
        }
        console.log('Game State loaded.');

        // Return gameState
        return gameState;
    }

    // Save current gameState
    saveGameState(gameState) {
        console.log('Saving game...');
        localStorage.setItem('DRstate', JSON.stringify(gameState));
        console.log('Game saved.');
    }
}