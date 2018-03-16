// Import State
import { state } from '../../services/state.js';
// Import Utils
import { Utils as $ } from '../../services/utils.js';
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
        super.renderer(config);
    }

    static controller() {
        console.log('Newgame component initialized...');

        // add listener on button to save entered name to state
        $.event('#character-name-submit', 'click', () => {
            // Set submitted name to state
            let stateUpdate = state.createState();
            stateUpdate.character.name = $.select('#character-name-input').value;
            state.setState(stateUpdate);
            // render Inn Component on submit of character name
            InnComponent.render('page');
        });
    }
}