// Import State
import { State } from './services/state.js';
// Import Utils
import { Utils as $ } from './services/utils.js';
// Component Imports
import { NewgameComponent } from './components/newgame-component/newgame-component.js';
import { InnComponent } from './components/inn-component/inn-component.js';
import { DungeonComponent } from './components/dungeon-component/dungeon-component.js';


const currState = State.getState();

// Dev Tools
    //Clear State 
$.event('#clear-state', 'click', () => {
    State.clearState();
});
    // Log State
$.event('#log-state', 'click', () => {
    State.logState();
});

// Conditionally load page of refresh
if(currState && currState.dungeon.view !== 'entrance') {
    DungeonComponent.render('page');        
} else if (currState) {
    InnComponent.render('page');
} else {
    NewgameComponent.render('page');
};
