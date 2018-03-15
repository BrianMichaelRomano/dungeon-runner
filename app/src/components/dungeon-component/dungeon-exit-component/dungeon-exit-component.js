// Import State
import { state } from '../../../services/state.js';
// Import renderer
import { Component } from '../../../services/component.js';
import { InnComponent } from '../../inn-component/inn-component.js';

export class DungeonExitComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-exit-component/dungeon-exit-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Character Page
        super.renderer(config);
    }

    static controller() {
        console.log('Dungeon exit component initialized...');

        // Continue button
        document.getElementById('continue').addEventListener('click', () => {
            InnComponent.render('dungeon-view');
            state.setDungeonView('entrance');
        });
    }
}