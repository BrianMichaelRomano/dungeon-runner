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
    clearState: function() {
        localStorage.removeItem('view');
        localStorage.removeItem('player');   
        localStorage.removeItem('skeleton');   
        localStorage.removeItem('dungeon');   
        console.log('State reset!')     
    },
    logState: function() {
        console.log('Dungeon State: ', this.dungeon.getDungeonState());
        console.log('View State: ', this.view.getViewState());
        console.log('Player State: ', this.entity.getPlayerState());
        console.log('Skeleton State: ', this.entity.getSkeletonState());
    },
    view: {
        // Set view state
        setViewState(view) {
            localStorage.setItem('view', JSON.stringify(view));
        },
        // Get view state
        getViewState() {
            return JSON.parse(localStorage.getItem('view'));
        }
    },
    entity: {
        getNewPlayer() {
            const player = {
                name: 'Firecore',
                HP: 100,
                AP: 80,
                MP: 60,
                ATT: 10
            }
            return player;
        },
        getNewSkeleton() {
            const skeleton = {
                name: 'Skeleton',
                HP: 80,
                AP: 60,
                MP: 40,
                ATT: 10
            }
            return skeleton;
        },
        getPlayerState() {
            if(localStorage.getItem('player') === null) {
                return this.getNewPlayer();
            } else {
                return JSON.parse(localStorage.getItem('player'));
            }
        },
        setPlayerState(player) {
            localStorage.setItem('player', JSON.stringify(player));
        },
        getSkeletonState() {
            if(localStorage.getItem('skeleton') === null) {
                return this.getNewSkeleton();
            } else {
                return JSON.parse(localStorage.getItem('skeleton'));
            }
        },
        setSkeletonState(skeleton) {
            localStorage.setItem('skeleton', JSON.stringify(skeleton));
        }
    },
    dungeon: {
        setDungeonState(state) {
            localStorage.setItem('dungeon', JSON.stringify(state));
        },
        getDungeonState() { 
            if(localStorage.getItem('dungeon')) {
                return JSON.parse(localStorage.getItem('dungeon'));
            } else {
                const newState = {
                    turn: 0,
                    status: 'fresh'
                };
                localStorage.setItem('dungeon', JSON.stringify(newState));
    
                return newState;
            }
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    // Grab elements and store in variables for use in viewRenderer
    homeBtn: document.querySelector('#home-btn'),
    dungeonBtn: document.querySelector('#dungeon-btn'),
    characterBtn: document.querySelector('#character-btn'),
    shopBtn: document.querySelector('#shop-btn'),
    inventoryBtn: document.querySelector('#inventory-btn'),
    viewOutput: document.querySelector('#view-output')
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Load Route Controller
const viewRouteController = __webpack_require__(3);
// Load State Controller
const state = __webpack_require__(0);
// Register event listeners for routes
viewRouteController.registerListeners();
// Load view saved in state if exists or load home view on browser refresh
viewRouteController.loadCurrentView();

// DEVBUTTONS ------------------------------------------------------
// Register Event Listener for Reset State button
document.querySelector('#reset-state-btn').addEventListener('click', () => {
    state.clearState();
    viewRouteController.loadCurrentView();
});
// Register Event Listener for Log State button
document.querySelector('#log-state-btn').addEventListener('click', () => {
    state.logState();
    viewRouteController.loadCurrentView();
});
// DEVBUTTONS ------------------------------------------------------


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Load view selectors
const viewEl = __webpack_require__(1);
// Load view renderer functions
const viewRenderer = __webpack_require__(4);
// Load State Controller
const stateController = __webpack_require__(0);
// Load all views and controllers
const homeView = __webpack_require__(5);
const homeController = __webpack_require__(6);
const dungeonView = __webpack_require__(7);
const dungeonController = __webpack_require__(8);
const characterView = __webpack_require__(10);
const characterController = __webpack_require__(11);
const shopView = __webpack_require__(12);
const shopController = __webpack_require__(13);
const inventoryView = __webpack_require__(14);
const inventoryController = __webpack_require__(15);

module.exports = {
    registerListeners: function() {
        // register event listeners that will render selected view and set that view to state
        // Home Route
        viewEl.homeBtn.addEventListener('click', () => {
            viewRenderer(homeView());
            stateController.view.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView());
            dungeonController.loadListeners();            
            stateController.view.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView());
            stateController.view.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView());
            stateController.view.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView());
            stateController.view.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home on browser refresh if no saved state
    loadCurrentView() {

        if(stateController.view.getViewState() === null) {
            viewRenderer(homeView());
        } else {
            switch(stateController.view.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView());
                    dungeonController.loadListeners();
                    break;
                case 'character':
                    viewRenderer(characterView());
                    break;
                case 'shop':
                    viewRenderer(shopView());
                    break;
                case 'inventory':
                    viewRenderer(inventoryView());
                    break;
                default:
                    viewRenderer(homeView());
            }
        }
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Load View Selectors
const viewEl = __webpack_require__(1);

// Export each view render function
module.exports = function(view) {
    // Render inputed view
    viewEl.viewOutput.innerHTML = view;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function() {
    const view = `
    <div id="home-view">
    
        <div id="hv-header">
            <h2>Home</h2>
        </div>
    
    </div>
    `;

    return view;
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports =  { }

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// View method that returns the view template string 
module.exports = function() {
    const view = `
    <div id="dungeon-view">
    
        <div id="dv-header">
            <h2>Dungeon</h2>
        </div>
    
        <div id="rendered-dungeon">
    
            <button id="enter-dungeon-btn">Enter Dungeon</button>
    
            <div id="dungeon-messages"></div>
    
            <div id="entity-cards"></div>
    
            <div id="action-btns"></div>    
        </div>
    
    </div>
    `;

    return view;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Required Modules
const state = __webpack_require__(0);
const combat = __webpack_require__(9);

// Export of module object
module.exports = {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
            });
        },
        // Renders dungeon view
        renderDungeon: function() {
            // Get states that exists or create new states if non exist
            let player = state.entity.getPlayerState();
            let enemy = state.entity.getSkeletonState();
            let dungeonState = state.dungeon.getDungeonState();

            // Check if enter dungeon button has already been pressed and remove it if so
            if(document.querySelector('#enter-dungeon-btn')) {
                document.querySelector('#enter-dungeon-btn').remove();
            }
            // this is where dungeon messages should be displayed
            document.querySelector('#dungeon-messages').innerHTML = `
                <p>You are now in the dungeon!</p>
            `;

            // Template for entity card views
            document.querySelector('#entity-cards').innerHTML = `
                <div id="player-card">
                    <ul>
                        <li>${player.name}</li>
                        <li>${player.HP}</li>
                        <li>${player.AP}</li>
                        <li>${player.MP}</li>
                    </ul>    
                </div>
                <div id="enemy-card">
                    <ul>
                        <li>${enemy.name}</li>
                        <li>${enemy.HP}</li>
                        <li>${enemy.AP}</li>
                        <li>${enemy.MP}</li>
                    </ul>    
                </div>
            `;

            // Template for action buttons
            document.querySelector('#action-btns').innerHTML = `
                <button id="attack-btn">Attack</button>
                <button id="defend-btn">Defend</button>
                <button id="magic-btn">Use Magic</button>
                <button id="item-btn">Use Item</button>
                <button id="flee-btn">Flee</button>
            `;
            
            // Action Button Listeners
            document.querySelector('#attack-btn').addEventListener('click', () => {
                // TODO: Create attack method to handle most of this logic
                enemy.HP = combat.attack(player, enemy);
                state.entity.setPlayerState(player);
                state.entity.setSkeletonState(enemy);
                dungeonState.turn += 1;
                dungeonState.status = 'inCombat';
                state.dungeon.setDungeonState(dungeonState);
                console.log('Enemy HP:', enemy.HP);
                console.log('Dungeon State: ', dungeonState);
                this.renderDungeon();
            });
        }
    }

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
    attack: function(player, enemy) {
        console.log(`${player.name} does ${player.ATT} damage to ${enemy.name}`);
        return enemy.HP - player.ATT;
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function() {
    const view = `
    <div id="character-view">
    
        <div id="cv-header">
            <h2>Character</h2>
        </div>
    
    </div>
    `;
    
    return view;
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = { }

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function() {
    const view = `
    <div id="shop-view">
    
        <div id="sv-header">
            <h2>Shop</h2>
        </div>
    
    </div>
    `;
    
    return view;
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = { }

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function() {
    const view = `
    <div id="inventory-view">
    
        <div id="iv-header">
            <h2>Inventory</h2>
        </div>
    
    </div>
    `;
    
    return view;
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = { }

/***/ })
/******/ ]);