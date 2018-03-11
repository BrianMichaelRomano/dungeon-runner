// Component Imports
import { NewgameComponent } from './components/newgame-component/newgame-component.js';
import { InnComponent } from './components/inn-component/inn-component.js';
// Import State
import { state } from './services/state.js';

// Check if state already exists
    // If state already exists render Inn Component
    if(state.getState()) {
        InnComponent.render('page');
    } else {
        NewgameComponent.render('page');
    }
