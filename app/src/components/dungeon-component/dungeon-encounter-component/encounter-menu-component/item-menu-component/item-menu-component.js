// Import State
import { State } from '../../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../../services/utils.js';
// Import Components
import { Component } from '../../../../../services/component.js';
import { Item } from '../../../../../services/actions/item.js';

export class ItemMenuComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-encounter-component/encounter-menu-component/item-menu-component/item-menu-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Item Menu View
        super.renderer(config);
    }

    static controller() {
        console.log('Item Menu Component initialized...');

        $.event('#potion', 'click', () => {
            Item.potion();
        });
    }
}