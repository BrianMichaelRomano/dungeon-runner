// Import State
import { State } from '../../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../../services/utils.js';
// Import Components
import { Component } from '../../../../services/component.js';
import { InnComponent } from '../../../inn-component/inn-component.js';
import { AttackMenuComponent } from './attack-menu-component/attack-menu-component.js';
import { DefenseMenuComponent } from './defense-menu-component/defense-menu-component.js';
import { MagicMenuComponent } from './magic-menu-component/magic-menu-component.js';
import { ItemMenuComponent } from './item-menu-component/item-menu-component.js';
import { FleeMenuComponent } from './flee-menu-component/flee-menu-component.js';

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

        // Attack
        $.event('#attack-btn', 'click', () => {
            AttackMenuComponent.render('selected-action-view');
        });

        // Defense
        $.event('#defense-btn', 'click', () => {
            DefenseMenuComponent.render('selected-action-view');
        });

        // Magic
        $.event('#magic-btn', 'click', () => {
            MagicMenuComponent.render('selected-action-view');
        });

        // Item
        $.event('#item-btn', 'click', () => {
            ItemMenuComponent.render('selected-action-view');
        });

        // Flee
        $.event('#flee-btn', 'click', () => {
            FleeMenuComponent.render('selected-action-view');
        });
    }
}