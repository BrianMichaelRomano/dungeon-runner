// Import State
import { State } from '../../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../../services/utils.js';
// Import Components
import { Component } from '../../../../../services/component.js';
import { Magic } from '../../../../../services/actions/magic.js';

export class MagicMenuComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/encounter-menu-component/magic-menu-component/magic-menu-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Magic Menu View
        super.renderer(config);
    }

    static controller() {
        console.log('Magic Menu Component initialized...');

        $.event('#fire-spell', 'click', () => {
            Magic.fireSpell();
        });
    }
}