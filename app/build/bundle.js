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
    // Grab elements and store in variables for use in viewRenderer
    homeBtn: document.querySelector('#home-btn'),
    dungeonBtn: document.querySelector('#dungeon-btn'),
    characterBtn: document.querySelector('#character-btn'),
    shopBtn: document.querySelector('#shop-btn'),
    inventoryBtn: document.querySelector('#inventory-btn'),
    viewOutput: document.querySelector('#view-output')
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
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
        getPlayer() {
            const player = {
                name: 'Firecore',
                HP: 100,
                AP: 80,
                MP: 60
            }
            return player;
        },
        getSkeleton() {
            const skeleton = {
                name: 'Skeleton',
                HP: 80,
                AP: 60,
                MP: 40
            }
            return skeleton;
        }
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Load Route Controller
const viewRouteController = __webpack_require__(3);
// Register event listeners for routes
viewRouteController.registerListeners();
// Load view saved in state if exists or load home view on browser refresh
viewRouteController.loadCurrentView();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Load view selectors
const viewEl = __webpack_require__(0);
// Load view renderer functions
const viewRenderer = __webpack_require__(4);
// Load State Controller
const stateController = __webpack_require__(1);
// Load all views
const homeView = __webpack_require__(5);
const dungeonView = __webpack_require__(6);
const characterView = __webpack_require__(7);
const shopView = __webpack_require__(8);
const inventoryView = __webpack_require__(9);

module.exports = {
    registerListeners: function() {
        // register event listeners that will render selected view and set that view to state
        // Home Route
        viewEl.homeBtn.addEventListener('click', () => {
            viewRenderer(homeView.template);
            stateController.view.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView.template);
            dungeonView.viewController.loadListeners();            
            stateController.view.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView.template);
            stateController.view.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView.template);
            stateController.view.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView.template);
            stateController.view.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home on browser refresh if no saved state
    loadCurrentView() {

        if(stateController.view.getViewState() === null) {
            viewRenderer(homeView.template);
        } else {
            switch(stateController.view.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView.template);
                    dungeonView.viewController.loadListeners();
                    break;
                case 'character':
                    viewRenderer(characterView.template);
                    break;
                case 'shop':
                    viewRenderer(shopView.template);
                    break;
                case 'inventory':
                    viewRenderer(inventoryView.template);
                    break;
                default:
                    viewRenderer(homeView.template);
            }
        }
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Load View Selectors
const viewEl = __webpack_require__(0);

// Export each view render function
module.exports = function(view) {
    // Render inputed view
    viewEl.viewOutput.innerHTML = view;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const view = `
<div id="home-view">

    <div id="hv-header">
        <h2>Home</h2>
    </div>

</div>
`;

module.exports = {
    template: view,
    viewController: { }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const state = __webpack_require__(1);

const player = state.entity.getPlayer();
const enemy = state.entity.getSkeleton();

const view = `
<div id="dungeon-view">

    <div id="dv-header">
        <h2>Dungeon</h2>
    </div>
    <button id="enter-dungeon-btn">Enter Dungeon</button>

    <div id="dungeon-messages"></div>

    <div id="entity-cards"></div>

</div>
`;

module.exports = {
    template: view,
    viewController: {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
            });
        },
        renderDungeon: function() {
            document.querySelector('#dungeon-messages').innerHTML = `
                <p>You are now in the dungeon!</p>
            `;
            document.querySelector('#entity-cards').innerHTML = `
                <div id="player-card">${player.name}</div>
                <div id="enemy-card">${enemy.name}</div>
            `
        }
    }

}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

const view = `
<div id="character-view">

    <div id="cv-header">
        <h2>Character</h2>
    </div>

</div>
`;

module.exports = {
    template: view,
    viewController: { }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

const view = `
<div id="shop-view">

    <div id="sv-header">
        <h2>Shop</h2>
    </div>

</div>
`;

module.exports = {
    template: view,
    viewController: { }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

const view = `
<div id="inventory-view">

    <div id="iv-header">
        <h2>Inventory</h2>
    </div>

</div>
`;

module.exports = {
    template: view,
    viewController: { }
}

/***/ })
/******/ ]);