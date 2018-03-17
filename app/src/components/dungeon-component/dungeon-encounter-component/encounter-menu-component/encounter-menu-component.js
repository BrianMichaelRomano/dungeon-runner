// Import State
import { State } from '../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../services/utils.js';
// Import Components
import { Component } from '../../../../services/component.js';
import { InnComponent } from '../../../inn-component/inn-component.js';

export class EncounterMenuComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/encounter-menu-component/encounter-menu-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Dungeon Encounter View
        super.renderer(config);
    }

    static controller() {
        console.log('Encounter Menu Component initialized...');

        $.event('#flee-btn', 'click', () => {
            InnComponent.render('page');
        });
    }
}