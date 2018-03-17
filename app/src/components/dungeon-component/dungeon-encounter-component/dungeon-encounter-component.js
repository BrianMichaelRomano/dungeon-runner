// Import State
import { State } from '../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../services/utils.js';
// Import Components
import { Component } from '../../../services/component.js';
import { EncounterMenuComponent } from './encounter-menu-component/encounter-menu-component.js';

export class DungeonEncounterComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/dungeon-encounter-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Dungeon Encounter View
        super.renderer(config);
    }

    static controller() {
        console.log('Dungeon encounter component initialized...'); 
        EncounterMenuComponent.render('encounter-menu-view');        
    }
}