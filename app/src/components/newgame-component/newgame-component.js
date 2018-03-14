// Import State
import { state } from '../../services/state.js';
// Import Components
import { Component } from '../../services/component.js';
import { InnComponent } from '../inn-component/inn-component.js';

export class NewgameComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/newgame-component/newgame-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Newgame Page
        super.render(config);
    }

    static controller() {
        console.log('Newgame component initialized...');

        // select input and buttons
        const charNameInput = document.getElementById('character-name-input');
        const charNameSubmit = document.getElementById('character-name-submit');

        // add listener on button to save entered name to state
        charNameSubmit.addEventListener('click', () => {
            // Set submitted name to state
            let stateUpdate = state.createState();
            stateUpdate.character.name = charNameInput.value;
            state.setState(stateUpdate);
            // render Inn Component on submit of character name
            InnComponent.render('page');
        });
    }
}