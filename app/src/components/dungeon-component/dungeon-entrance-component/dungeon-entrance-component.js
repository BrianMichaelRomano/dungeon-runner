// Import Components
import { Component } from '../../../services/component.js';
import { InnComponent } from '../../inn-component/inn-component.js';

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

        // Back button
        document.getElementById('back').addEventListener('click', () => {
            InnComponent.render('page');
        });
    }
}