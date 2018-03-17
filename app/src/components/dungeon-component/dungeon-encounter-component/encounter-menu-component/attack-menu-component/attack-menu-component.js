// Import State
import { State } from '../../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../../services/utils.js';
// Import Components
import { Component } from '../../../../../services/component.js';
import { Attack } from '../../../../../services/attack.js';

export class AttackMenuComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/encounter-menu-component/attack-menu-component/attack-menu-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Attack Menu View
        super.renderer(config);
    }

    static controller() {
        console.log('Attack Menu Component initialized...');

        $.event('#simple-attack', 'click', () => {
            Attack.simple();
        });
    }
}