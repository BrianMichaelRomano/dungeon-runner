// Import Components
import { Component } from '../../services/component.js';
import { InnComponent } from '../inn-component/inn-component.js';
// Import State
import { state } from '../../services/state.js';

export class CharacterComponent extends Component {
    constructor() { }

    static render(elementID) {

        // Configuration Object
        const config = {
            view: './components/character-component/character-component.html',
            element: elementID,
            callback: this.controller,
            data: state.getState()
        }

        // Render Character Page
        super.renderer(config);
    }

    static controller() {
        console.log('Character component initialized...');

        // Back button
        document.getElementById('back').addEventListener('click', () => {
            InnComponent.render('page');
        });
    }
}