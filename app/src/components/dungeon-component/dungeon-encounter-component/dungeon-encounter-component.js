// Import State
import { state } from '../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../services/utils.js';
// Import Components
import { Component } from '../../../services/component.js';
import { DungeonExitComponent } from  '../dungeon-exit-component/dungeon-exit-component.js';

export class DungeonEncounterComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/dungeon-encounter-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Dungeon Combat View
        super.renderer(config);
    }

    static controller() {
        console.log('Dungeon combat component initialized...');

        // Fight button
        $.event('#fight', 'click', () => {
            DungeonExitComponent.render('dungeon-view');
            state.setDungeonView('exit');
        });
    }
}