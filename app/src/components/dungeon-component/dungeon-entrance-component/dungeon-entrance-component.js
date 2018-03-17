// Import State
import { State } from '../../../services/state.js';
// Import Utils
import { Utils as $ } from '../../../services/utils.js';
// Import EnemyGenerator
import { EnemyGenerator } from '../../../services/enemyGenerator.js';
// Import Components
import { Component } from '../../../services/component.js';
import { InnComponent } from '../../inn-component/inn-component.js';
import { DungeonEncounterComponent } from  '../dungeon-encounter-component/dungeon-encounter-component.js';

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
            let enemy = EnemyGenerator.spawnSkeleton();
            State.setEnemyState(enemy);
            State.setDungeonView('encounter');
            DungeonEncounterComponent.render('dungeon-view');
        });

        // Back Button
        $.event('#back', 'click', () => {
            InnComponent.render('page');
        });
    }
}