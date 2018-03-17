// Import State
import { State } from '../../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../../services/utils.js';
// Import Components
import { Component } from '../../../../../services/component.js';
import { Flee } from '../../../../../services/actions/flee.js';

export class FleeMenuComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/encounter-menu-component/flee-menu-component/flee-menu-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Flee Menu View
        super.renderer(config);
    }

    static controller() {
        console.log('Flee Menu Component initialized...');

        $.event('#retreat', 'click', () => {
            Flee.retreatToInn();
        });
    }
}