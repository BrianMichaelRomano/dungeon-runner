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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {

    // Clears all states for dungeon runner saved in localStorage        
    clearState: function() {
        localStorage.removeItem('view');
        localStorage.removeItem('player');   
        localStorage.removeItem('skeleton');   
        localStorage.removeItem('dungeon');   
        console.log('State reset!')     
    },

    // Logs all states for dungeon runner saved in localStorage    
    logState: function() {
        console.log('Dungeon State: ', this.dungeon.getDungeonState());
        console.log('View State: ', this.view.getViewState());
        console.log('Player State: ', this.entity.getPlayerState());
        console.log('Skeleton State: ', this.entity.getSkeletonState());
    },

    // Methods controlling the view states
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

    // Methods controlling the entity states    
    entity: {
        // Creates new player state model and returns it
        createNewPlayer() {
            const newPlayer = {
                name: 'Firecore',
                HP: 100,
                AP: 80,
                MP: 60,
                ATT: 10
            }
            return newPlayer;
        },

        // Creates new skeleton state model and returns it        
        createNewSkeleton() {
            const newSkeleton = {
                name: 'Skeleton',
                HP: 80,
                AP: 60,
                MP: 40,
                ATT: 10
            }
            return newSkeleton;
        },

        // Checks for player state in localStorage,
        // if - no player state
        //     creates new player state and returns it
        // else 
        //     return existing player state 
        getPlayerState() {
            if(localStorage.getItem('player') === null) {
                return this.createNewPlayer();
            } else {
                return JSON.parse(localStorage.getItem('player'));
            }
        },

        // Accepts a player object and sets it to player state in local storage
        setPlayerState(player) {
            localStorage.setItem('player', JSON.stringify(player));
        },

                // Checks for skeleton state in localStorage,
        // if - no skeleton state
        //     creates new skeleton state and returns it
        // else 
        //     return existing skeleton state 
        getSkeletonState() {
            if(localStorage.getItem('skeleton') === null) {
                return this.createNewSkeleton();
            } else {
                return JSON.parse(localStorage.getItem('skeleton'));
            }
        },

        // Accepts a skeleton object and sets it to skeleton state in local storage        
        setSkeletonState(skeleton) {
            localStorage.setItem('skeleton', JSON.stringify(skeleton));
        }
    },

    // Methods controlling the dungeon state        
    dungeon: {
        // Accepts a string and sets it to dungeon state in local storage                
        setDungeonState(state) {
            localStorage.setItem('dungeon', JSON.stringify(state));
        },
        
        // Checks for dungeon state in localStorage,
        // if - dungeon state
        //     returns dungeon state
        // else 
        //     create new dungeon state object, save object to localstorage and return it 
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
/***/ (function(module, exports) {

module.exports = {
    mainView: function() {
        // Main view template string
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
    
        // Return Main view template string
        return view;
    },

    entityCards: function(states) {
        // Entity cards view template string
        const view = `
            <div id="player-card">
                <ul>
                    <li>${states.player.name}</li>
                    <li>${states.player.HP}</li>
                    <li>${states.player.AP}</li>
                    <li>${states.player.MP}</li>
                </ul>    
            </div>
            <div id="enemy-card">
                <ul>
                    <li>${states.enemy.name}</li>
                    <li>${states.enemy.HP}</li>
                    <li>${states.enemy.AP}</li>
                    <li>${states.enemy.MP}</li>
                </ul>    
            </div>
        `;
        
        // Return Entity cards view template string
        return view;
    },

    // Action Buttons view template string
    actionButtons: function() {
        const view = `
            <button id="attack-btn">Attack</button>
            <button id="defend-btn">Defend</button>
            <button id="magic-btn">Use Magic</button>
            <button id="item-btn">Use Item</button>
            <button id="flee-btn">Flee</button>
        `;

        // Return Actions Buttons view template string
        return view;
    },

    // Display dungeon messages
    dungeonMessages: function(message) {
        const view = `<p>${message}</p>`;

        // Return message template string
        return view;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Load Route Controller
const viewRouteController = __webpack_require__(4);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Load view selectors
const viewEl = __webpack_require__(1);
// Load view renderer functions
const viewRenderer = __webpack_require__(5);
// Load State Controller
const stateController = __webpack_require__(0);
// Load all views and controllers
const homeView = __webpack_require__(6);
const homeController = __webpack_require__(7);
const dungeonView = __webpack_require__(2);
const dungeonController = __webpack_require__(8);
const characterView = __webpack_require__(11);
const characterController = __webpack_require__(12);
const shopView = __webpack_require__(13);
const shopController = __webpack_require__(14);
const inventoryView = __webpack_require__(15);
const inventoryController = __webpack_require__(16);

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
            viewRenderer(dungeonView.mainView());
            dungeonController.loadController();            
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
                    viewRenderer(dungeonView.mainView());
                    dungeonController.loadController();
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Load View Selectors
const viewEl = __webpack_require__(1);

// Export each view render function
module.exports = function(view) {
    // Render inputed view
    viewEl.viewOutput.innerHTML = view;
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function() {
    // Home view template string
    const view = `
    <div id="home-view">
    
        <div id="hv-header">
            <h2>Home</h2>
        </div>
    
    </div>
    `;

    // Return home view template string
    return view;
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports =  { }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Required Modules
const storageState = __webpack_require__(0);
const combat = __webpack_require__(9);
const dungeonViews = __webpack_require__(2);
const _ = __webpack_require__(10);

// Export of module object
module.exports = {
        // Loads controller and kicks off view logic
        loadController: function() {
            const dungeonState = storageState.dungeon.getDungeonState();
            // Checks if dungeon has been entered
            if(dungeonState.status === 'fresh') {
                // load Event Listener for enter button
                _.element('#enter-dungeon-btn').addEventListener('click', () => {
                    console.log('Dungeon Entered...');
                    // Sets dungeon status state to entered
                    dungeonState.status = 'entered';
                    storageState.dungeon.setDungeonState(dungeonState);
                    // Render dungeon
                    this.renderDungeon();
                });
            } else {
                // Render dungeon                
                this.renderDungeon();
            }
        },

        // Renders dungeon view
        renderDungeon: function() {
            // Get states that exists or create new states if non exist
            let varStates = {
                player: storageState.entity.getPlayerState(),
                enemy: storageState.entity.getSkeletonState(),
                dungeonState: storageState.dungeon.getDungeonState()
            }

            // Check if enter dungeon button has already been pressed and remove it if so
            if(_.element('#enter-dungeon-btn')) {
                _.element('#enter-dungeon-btn').remove();
            }
            // this is where dungeon messages should be displayed
            _.element('#dungeon-messages').innerHTML = dungeonViews.dungeonMessages('Running dungeon!');

            // Template for entity card views
            _.element('#entity-cards').innerHTML = dungeonViews.entityCards(varStates);

            // Template for action buttons
            _.element('#action-btns').innerHTML = dungeonViews.actionButtons();
            
            // Action Button Listeners
            _.element('#attack-btn').addEventListener('click', () => {
                // TODO: Create attack method to handle most of this logic
                varStates.enemy.HP = combat.attack(varStates.player, varStates.enemy);
                storageState.entity.setPlayerState(varStates.player);
                storageState.entity.setSkeletonState(varStates.enemy);
                varStates.dungeonState.turn += 1;
                varStates.dungeonState.status = 'inCombat';
                storageState.dungeon.setDungeonState(varStates.dungeonState);
                console.log('Enemy HP:', varStates.enemy.HP);
                console.log('Dungeon State: ', varStates.dungeonState);
                this.renderDungeon();
            });
        }
    }

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
    // Performs an attack based on attacker vs defender
    attack: function(attacker, defender) {
        console.log(`${attacker.name} does ${attacker.ATT} damage to ${defender.name}`);
        
        // Return result new Hit Point value after attack
        return defender.HP - attacker.ATT;
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
    // element selector
    element(el) {
        return document.querySelector(el);
    }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function() {
    // Character view template string
    const view = `
    <div id="character-view">
    
        <div id="cv-header">
            <h2>Character</h2>
        </div>
    
    </div>
    `;

    // Return character view template string    
    return view;
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = { }

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function() {
    // Shop view template string
    const view = `
    <div id="shop-view">
    
        <div id="sv-header">
            <h2>Shop</h2>
        </div>
    
    </div>
    `;
        
    // Return shop view template string
    return view;
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = { }

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function() {
    // Inventory view template string
    const view = `
    <div id="inventory-view">
    
        <div id="iv-header">
            <h2>Inventory</h2>
        </div>
    
    </div>
    `;
    
    //Return inventory view template string
    return view;
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = { }

/***/ })
/******/ ]);