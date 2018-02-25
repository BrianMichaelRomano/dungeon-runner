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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
/***/ (function(module, exports, __webpack_require__) {

// Load Route Controller
const viewRouteController = __webpack_require__(2);
// Register event listeners for routes
viewRouteController.registerListeners();
// Load view saved in state if exists or load home view
viewRouteController.loadCurrentView();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Load view selectors
const viewEl = __webpack_require__(0);
// Load view renderer functions
const viewRenderer = __webpack_require__(3);
// Load State Controller
const stateController = __webpack_require__(4);
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
            viewRenderer(homeView);
            stateController.setViewState('home');
        });
        
        // Dungeon Route
        viewEl.dungeonBtn.addEventListener('click', () => {
            viewRenderer(dungeonView);
            stateController.setViewState('dungeon');            
        });
        
        // Character Route
        viewEl.characterBtn.addEventListener('click', () => {
            viewRenderer(characterView);
            stateController.setViewState('character');            
        });
        
        // Shop Route
        viewEl.shopBtn.addEventListener('click', () => {
            viewRenderer(shopView);
            stateController.setViewState('shop');
        });
        
        // Inventory Route
        viewEl.inventoryBtn.addEventListener('click', () => {
            viewRenderer(inventoryView);
            stateController.setViewState('inventory');            
        });
    },
    // Loads current view from state or loads home if no saved state
    loadCurrentView() {
        console.log('Loading view from saved state...');
        if(stateController.getViewState() === null) {
            viewRenderer(homeView);
        } else {
            switch(stateController.getViewState()) {
                case 'dungeon':
                    viewRenderer(dungeonView);
                    break;
                case 'character':
                    viewRenderer(characterView);
                    break;
                case 'shop':
                    viewRenderer(shopView);
                    break;
                case 'inventory':
                    viewRenderer(inventoryView);
                    break;
                default:
                    viewRenderer(homeView);
            }
        }
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Load View Selectors
const viewEl = __webpack_require__(0);

// Export each view render function
module.exports = function(view) {
    // Render inputed view
    viewEl.viewOutput.innerHTML = view;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
    // Set view state
    setViewState(view) {
        localStorage.setItem('view', JSON.stringify(view));
    },
    // Get view state
    getViewState() {
        return JSON.parse(localStorage.getItem('view'));
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = `
<h3>Home page being rendered!</h3>
`;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = `
<h3>Dungeon page being rendered!</h3>
`;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = `
<h3>Character page being rendered!</h3>
`;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = `
<h3>Shop page being rendered!</h3>
`;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = `
<h3>Inventory page being rendered!</h3>
`;

/***/ })
/******/ ]);