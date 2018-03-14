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
            callback: this.controller
        }

        // Render Character Page
        super.render(config);
    }

    static controller() {
        console.log('Character component initialized...');

        // Back button
        document.getElementById('back').addEventListener('click', () => {
            InnComponent.render('page');
        });

        // Render page header wish dynamic player name
        document.querySelector('#character-name').innerHTML = `${state.getState().character.name}`;
    }
}