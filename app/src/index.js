// Controller Module
import { 
    viewInit, 
    navListenerInit, 
    renderDungeon,
    dungeonListenerInit,
    stateObjectInit,
    devListenerInit
} from './modules/controller.js';


// Load Development listeners
devListenerInit();


// Initialize State Object if none exists
stateObjectInit();


// Load Navigation listener
navListenerInit();


// Load Dungeon Listeners
dungeonListenerInit();


// Load current route view
viewInit();


// Render Dungeon
renderDungeon();