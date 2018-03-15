// Import State
import { state } from '../../../services/state.js';
// Import Components
import { Component } from '../../../services/component.js';
import { DungeonExitComponent } from  '../dungeon-exit-component/dungeon-exit-component.js';

export class DungeonCombatComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/dungeon-component/dungeon-combat-component/dungeon-combat-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Dungeon Combat View
        super.renderer(config);
    }

    static controller() {
        console.log('Dungeon combat component initialized...');

                // Enter button
                document.getElementById('fight').addEventListener('click', () => {
                    DungeonExitComponent.render('dungeon-view');
                    state.setDungeonView('exit');
                });
    }
}