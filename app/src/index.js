// Component Imports
import { NewgameComponent } from './components/newgame-component/newgame-component.js';
import { InnComponent } from './components/inn-component/inn-component.js';
import { DungeonComponent } from './components/dungeon-component/dungeon-component.js';

// Import State
import { state } from './services/state.js';

const currState = state.getState();

// Conditionally load page of refresh
if(currState && currState.dungeon.view !== 'entrance') {
    DungeonComponent.render('page');        
} else if (currState) {
    InnComponent.render('page');
} else {
    NewgameComponent.render('page');
};
