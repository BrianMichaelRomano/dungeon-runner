// Import State
import { state } from '../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../services/utils.js';
// Import Components
import { Component } from '../../../services/component.js';
import { InnComponent } from '../../inn-component/inn-component.js';
import { DungeonCombatComponent } from  '../dungeon-combat-component/dungeon-combat-component.js';

export class DungeonEntranceComponent extends Component{
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-entrance-component/dungeon-entrance-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Character Page
        super.renderer(config);
    }

    static controller() {
        console.log('Dungeon entrance component initialized...');

        // Enter Button
        $.event('#enter', 'click', () => {
            DungeonCombatComponent.render('dungeon-view');
            state.setDungeonView('combat');
        });

        // Back Button
        $.event('#back', 'click', () => {
            DungeonCombatComponent.render('dungeon-view');
            InnComponent.render('page');
        });
    }
}