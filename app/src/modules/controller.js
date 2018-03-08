// View Module
import {
    loadNavListener, 
    loadDevListeners,
    loadCurrentView,
    loadDungeonListeners,
    renderDungeonView,
    loadMenuListener
} from './view.js';

// Model Module
import { 
    setCurrentView,
    getCurrentView,
    initializeStateObject,
    clearStateObject,
    logStateObject,
    setStateObjectProperty,
    getStateObject
} from './model.js';


// Run Dungeon button clicked
const runDungeonBtnClick = function() {
    console.log('Run Dungeon Button click...');
    
    // Set dungeon status to entered
    setStateObjectProperty('entered', 'dungeon', 'status');
    // Call rendering of dungeon
    renderDungeon();
}


// Attack button clicked
const attackBtnClick = function() {
    console.log('Attack Button click...');
    
}


// Defense button clicked
const defenseBtnClick = function() {
    console.log('Defense Button click...');    
}


// Magic button clicked
const magicBtnClick = function() {
    console.log('Magic Button click...');    
}


// Item button clicked
const itemBtnClick = function() {
    console.log('Item Button click...');    
}


// Flee button clicked
const fleeBtnClick = function() {
    console.log('Flee Button click...');    
}


// Initialize State Object if none exists
const stateObjectInit = function() {
    // Dev Log...
    console.log('Initializing State Object...');
    initializeStateObject();
}


// Load Developement Listeners
const devListenerInit = function() {
    console.log('Initializing development Listeners...');
    loadDevListeners();
}


// Load Navigation Listeners
const navListenerInit = function() {
    // Dev Log...    
    console.log('Initializing navigation Listeners...')    
    // Call to view to load Navigation listeners
    loadNavListener();
}


// Load Menu Listener
const menuListenerInit = function() {
    // Dev Log... 
    console.log('Initializing menu listeners...');    
    // Call to view to load Menus listener    
    loadMenuListener();
}


// Load Dungeon Listeners
const dungeonListenerInit = function() {
    // Dev Log...  
    console.log('Initializing dungeon listeners...');
    loadDungeonListeners();
}


// Initialize View
const viewInit = function() {
    // Get current route from model
    const currentRoute = getCurrentView();
    // Dev Log...
    console.log(`Initializing current route ${currentRoute}...`);        
    // Call to view to load current view
    loadCurrentView(currentRoute);
}


// View Selected
const viewSelected = function(activeView) {
    // Dev Log...    
    console.log(`${activeView} selected and saved...`)
    // Set current view to model
    setCurrentView(activeView);
}


// Render Dungeon
const renderDungeon = function() {
    // Dev Log...
    console.log('Rendering Dungeon...');
    // Get state
    const currentStateObject = getStateObject()
    // Render view
    renderDungeonView(currentStateObject);
}


// Log state to console
const logStateBtnPressed = function() {
    logStateObject();
}


// Clear state Object
const clearStateBtnPressed = function() {
    clearStateObject();
    location.reload();
}


export {
    viewInit,
    viewSelected,
    navListenerInit,
    renderDungeon,
    dungeonListenerInit,
    stateObjectInit,
    devListenerInit,
    menuListenerInit,
    logStateBtnPressed,
    clearStateBtnPressed,
    runDungeonBtnClick,
    attackBtnClick,
    defenseBtnClick,
    magicBtnClick,
    itemBtnClick,
    fleeBtnClick
}