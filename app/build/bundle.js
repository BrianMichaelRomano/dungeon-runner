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
            console.log(`Set dungeon state to ${state}`);
        },
        getDungeonState() { 
            if(localStorage.getItem('dungeon')) {
            console.log(`Dungeon state is ${localStorage.getItem('dungeon')}`);            
                return JSON.parse(localStorage.getItem('dungeon'));
            } else {
                console.log('No saved dungeon state');
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
// Register Event Listener for Reset State button
document.querySelector('#reset-state-btn').addEventListener('click', () => {
    state.clearState();
    viewRouteController.loadCurrentView();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Load view selectors
const viewEl = __webpack_require__(1);
// Load view renderer functions
const viewRenderer = __webpack_require__(4);
// Load State Controller
const stateController = __webpack_require__(0);
// Load all views
const homeView = __webpack_require__(5);
const dungeonView = __webpack_require__(6);
const characterView = __webpack_require__(8);
const shopView = __webpack_require__(9);
const inventoryView = __webpack_require__(10);

module.exports = {
    registerListeners: function() {
        // register event listeners that will render selected view and set that view to state
        // Home Route
        viewEl.homeBtn.addEventListener('click', () => {
            viewRenderer(homeView.viewTemplate());
            stateController.view.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView.viewTemplate());
            dungeonView.dungeonController.loadListeners();            
            stateController.view.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView.viewTemplate());
            stateController.view.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView.viewTemplate());
            stateController.view.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView.viewTemplate());
            stateController.view.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home on browser refresh if no saved state
    loadCurrentView() {

        if(stateController.view.getViewState() === null) {
            viewRenderer(homeView.viewTemplate());
        } else {
            switch(stateController.view.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView.viewTemplate());
                    dungeonView.dungeonController.loadListeners();
                    break;
                case 'character':
                    viewRenderer(characterView.viewTemplate());
                    break;
                case 'shop':
                    viewRenderer(shopView.viewTemplate());
                    break;
                case 'inventory':
                    viewRenderer(inventoryView.viewTemplate());
                    break;
                default:
                    viewRenderer(homeView.viewTemplate());
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

module.exports = {
    viewTemplate: function() {
        const view = `
        <div id="home-view">
        
            <div id="hv-header">
                <h2>Home</h2>
            </div>
        
        </div>
        `;

        return view;
    },
    viewController: { }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const state = __webpack_require__(0);
const combat = __webpack_require__(7);

module.exports = {
    viewTemplate: function() {
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
    },
    dungeonController: {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
                state.dungeon.setDungeonState('entered');
            });
        },
        renderDungeon: function() {
            let player = state.entity.getPlayerState();
            let enemy = state.entity.getSkeletonState();

            if(document.querySelector('#enter-dungeon-btn')) {
                document.querySelector('#enter-dungeon-btn').remove();
            }
            document.querySelector('#dungeon-messages').innerHTML = `
                <p>You are now in the dungeon!</p>
            `;
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
            document.querySelector('#action-btns').innerHTML = `
                <button id="attack-btn">Attack</button>
                <button id="defend-btn">Defend</button>
                <button id="magic-btn">Use Magic</button>
                <button id="item-btn">Use Item</button>
                <button id="flee-btn">Flee</button>
            `;
            // Action Button Listeners
            document.querySelector('#attack-btn').addEventListener('click', () => {
                enemy.HP = combat.attack(player, enemy);
                console.log(enemy.HP);
                state.entity.setPlayerState(player);
                state.entity.setSkeletonState(enemy);
                this.renderDungeon();
            });
        }
    }

}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
    attack: function(player, enemy) {
        console.log(`${player.name} does ${player.ATT} damage to ${enemy.name}`);
        return enemy.HP - player.ATT;
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
    viewTemplate: function() {
        const view = `
        <div id="character-view">
        
            <div id="cv-header">
                <h2>Character</h2>
            </div>
        
        </div>
        `;
        
        return view;
    },
    viewController: { }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
    viewTemplate: function() {
        const view = `
        <div id="shop-view">
        
            <div id="sv-header">
                <h2>Shop</h2>
            </div>
        
        </div>
        `;
        
        return view;
    },
    viewController: { }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
    viewTemplate: function() {
        const view = `
        <div id="inventory-view">
        
            <div id="iv-header">
                <h2>Inventory</h2>
            </div>
        
        </div>
        `;
        
        return view;
    },
    viewController: { }
}

/***/ })
/******/ ]);