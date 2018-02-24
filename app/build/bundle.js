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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Required Modules
const PlayerModel = __webpack_require__(1);
const ViewController = __webpack_require__(2);

// Variables
const player = new PlayerModel('Firecore');
const view = new ViewController();

// logic
    // Render Player Attributes to  view
view.renderAttributes(player);
view.renderStatistics(player.getCalculatedStats());

/***/ }),
/* 1 */
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

    getCalculatedStats() {
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

        const playerStats = {
            HP: 10 + this.CON + this.STR,
            AP: 10 + this.DEX + this.CON,
            MP: this.INT * 10,
            AR: null,
            DR: this.CON + this.DEX,
            AC: this.DEX + this.STR,
            MC: this.WIS,
            WER: null,
            MER: this.INT + this.WIS,
            IR: this.DEX,
        };

        return playerStats;
    }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = class ViewController {
    constructor() {
        // select view elements
        this.charAttributeList = document.querySelector('#charAttributeList');
        this.charStatisticsList = document.querySelector('#charStatisticsList');
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
        console.log('View Rendered Player: ',player);
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
    console.log('View Rendered Player: ',playerStats);
    // set <ul> innerHTML to template output
    this.charStatisticsList.innerHTML = output;
    }
}

/***/ })
/******/ ]);