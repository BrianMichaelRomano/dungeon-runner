// Import State
import { State } from '../../services/state.js';
// Import Components
import { Component } from '../../services/component.js';
import { DungeonEntranceComponent } from './dungeon-entrance-component/dungeon-entrance-component.js';
import { DungeonEncounterComponent } from './dungeon-encounter-component/dungeon-encounter-component.js';
import { DungeonExitComponent } from './dungeon-exit-component/dungeon-exit-component.js';

export class DungeonComponent extends Component{
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Dungeon Page
        super.renderer(config);
    }

    static controller() {
        console.log('Dungeon component initialized...');

        // Get last saved dungeonView
        const dungeonView = State.getState().dungeon.view;

        // Render dungeon sub view conditionally
        if(dungeonView === 'entrance') {
            DungeonEntranceComponent.render('dungeon-view');
        } else if(dungeonView === 'encounter') {
            DungeonEncounterComponent.render('dungeon-view');
        } else if(dungeonView === 'exit') {
            DungeonExitComponent.render('dungeon-view');         
        };
    }
}