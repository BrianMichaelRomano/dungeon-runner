// Controller Module
import { 
    viewInit, 
    navListenerInit, 
    renderDungeon,
    dungeonListenerInit,
    stateObjectInit,
    devListenerInit
} from './modules/controller.js';


// Initialize State Object if none exists
stateObjectInit();


// Load Development listeners
devListenerInit();


// Load Navigation listener
navListenerInit();


// Load Dungeon Listeners
dungeonListenerInit();


// Load current route view
viewInit();


// Render Dungeon
renderDungeon();