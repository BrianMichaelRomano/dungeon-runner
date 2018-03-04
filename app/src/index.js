// Controller Module
import { 
    viewInit, 
    navListenerInit, 
    renderDungeon,
    dungeonListenerInit 
} from './modules/controller.js';

// Load Navigation listener
navListenerInit();

// Load Dungeon Listeners
dungeonListenerInit();

// Load current route view
viewInit();

// Render Dungeon
renderDungeon();