/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {


    getCalculatedStats(entity) {
        // Statistics
        // HP: Hit Points - CON, STR
        // AP: Action Points - DEX, CON
        // MP: Magic Points - INT
        // AR: Armor Rating - Based on equipment
        // DR: Defense Rating - CON, DEX
        // AC: Attack Chance - DEX, STR
        // MC: Magic Chance - WIS
        // WER: Weapon Effect Rating - Weapon, STR
        // MER: Magic Effect Rating - INT, WIS
        // IR: Initiative Rating - DEX

        const entityStats = {
            HP: 100 + entity.CON + entity.STR,
            AP: 10 + entity.DEX + entity.CON,
            MP: entity.INT * 2,
            AR: null,
            DR: entity.CON + entity.DEX,
            AC: entity.DEX + entity.STR,
            MC: entity.WIS,
            WER: null,
            MER: entity.INT + entity.WIS,
            IR: entity.DEX,
        };

        return entityStats;
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const stats = __webpack_require__(0);

module.exports = class ViewController {
    constructor() {
        // select view elements
        this.charAttributeList = document.querySelector('#charAttributeList');
        this.charStatisticsList = document.querySelector('#charStatisticsList');
        this.characterSheet = document.querySelector('#characterSheet');
        this.characterBtn = document.querySelector('#characterBtn');
        this.dungeonDisplay = document.querySelector('#dungeonDisplay');
        this.enterDungeonBtn = document.querySelector('#enterDungeonBtn');
        this.entityCards = document.querySelector('#entityCards');
    }
    // Render Player Attributes In <ul>
    renderAttributes(player) {
        let output = `
            <li>Constitution: ${player.CON}</li>
            <li>Strength: ${player.STR}</li>
            <li>Dexterity: ${player.DEX}</li>
            <li>Intelligence: ${player.INT}</li>
            <li>Wisdom: ${player.WIS}</li>
        `;

        // Log player attributes used in template 
        // console.log('View Rendered Player Attributes: ',player);
        // set <ul> innerHTML to template output
        this.charAttributeList.innerHTML = output;
    }

    // Render Player Statistics in <ul>
    renderStatistics(playerStats) {
        let output = `
        <li>Hit Points: ${playerStats.HP}</li>
        <li>Action Points: ${playerStats.AP}</li>
        <li>Magic Points: ${playerStats.MP}</li>
        <li>Armor Rating: ${playerStats.AR}</li>
        <li>Defense Rating: ${playerStats.DR}</li>
        <li>Attack Chance: ${playerStats.AC}</li>
        <li>Magic Chance: ${playerStats.MC}</li>
        <li>Weapon Effect Rating: ${playerStats.WER}</li>
        <li>Magic Effect Rating: ${playerStats.MER}</li>
        <li>Initiative: ${playerStats.IR}</li>
    `;

    // Log player Statistics used in template 
    // console.log('View Rendered Player Stats: ',playerStats);
    // set <ul> innerHTML to template output
    this.charStatisticsList.innerHTML = output;
    }

    // Toggle the character sheet in view
    toggleCharacterSheet() {
        if(this.characterSheet.style.display === 'none') {
            this.characterSheet.style.display = 'block';
        } else {
            this.characterSheet.style.display = 'none';
        };
    }

    // Toggle the dungeon display in view    
    toggleDungeonDisplay() {
        if(this.dungeonDisplay.style.display === 'none') {
            this.dungeonDisplay.style.display = 'block';
        } else {
            this.dungeonDisplay.style.display = 'none';
        };
    }

    // Render entity combat card
    renderEntityCards(player, enemy) {
        const playerStats = stats.getCalculatedStats(player);
        const enemyStats = stats.getCalculatedStats(enemy);

        let output = `
            <h3>${player.name}</h3>
            <p>HP: ${playerStats.HP}</p>
            <p>AP: ${playerStats.AP}</p>
            <p>MP: ${playerStats.MP}</p>
            <h3>${enemy.name}</h3>
            <p>HP: ${enemyStats.HP}</p>
            <p>AP: ${enemyStats.AP}</p>
            <p>MP: ${enemyStats.MP}</p>
        `;

        entityCards.innerHTML = output;
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Required Modules
const ViewController = __webpack_require__(1);
const GameStateController = __webpack_require__(3);
const stats = __webpack_require__(0);
const SkeletonModel = __webpack_require__(5);
const CombatController = __webpack_require__(6);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const PlayerModel = __webpack_require__(4);

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports =  class PlayerModel {
    constructor(name) {
        // Attributes
        // CON: Constitution
        // STR: Stregth
        // DEX: Dexterity
        // INT: Intelligence
        // WIS: Wisdom

        this.name = name;
        this.CON = 10;
        this.STR = 10;
        this.DEX = 10;
        this.INT = 10;
        this.WIS = 10;
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports =  class SkeletonModel {
    constructor() {
        // Attributes
        // CON: Constitution
        // STR: Stregth
        // DEX: Dexterity
        // INT: Intelligence
        // WIS: Wisdom

        this.name = "Skeleton";
        this.CON = 2;
        this.STR = 2;
        this.DEX = 2;
        this.INT = 2;
        this.WIS = 2;
    }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const stats = __webpack_require__(0);
const ViewController = __webpack_require__(1);

const view = new ViewController();

module.exports = {
    combatLoop(player, enemy) {
        console.log('Entites fighting...');
        const playerStats = stats.getCalculatedStats(player);
        const enemyStats = stats.getCalculatedStats(enemy);

        view.renderEntityCards(player, enemy);
        
        console.log(playerStats);
        console.log(enemyStats);
    }
}

/***/ })
/******/ ]);