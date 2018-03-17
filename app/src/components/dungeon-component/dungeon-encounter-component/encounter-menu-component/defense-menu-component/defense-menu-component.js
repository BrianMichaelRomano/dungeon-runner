// Import State
import { State } from '../../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../../services/utils.js';
// Import Components
import { Component } from '../../../../../services/component.js';
import { Defense } from '../../../../../services/actions/defense.js';

export class DefenseMenuComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/encounter-menu-component/defense-menu-component/defense-menu-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Defense Menu View
        super.renderer(config);
    }

    static controller() {
        console.log('Defense Menu Component initialized...');

        $.event('#block', 'click', () => {
            Defense.block();
        });
    }
}