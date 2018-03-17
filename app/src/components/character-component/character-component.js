// Import State
import { State } from '../../services/state.js';
// Import Utils
import { Utils as $ } from '../../services/utils.js';
// Import Components
import { Component } from '../../services/component.js';
import { InnComponent } from '../inn-component/inn-component.js';

export class CharacterComponent extends Component {
    constructor() { }

    static render(elementID) {

        // Configuration Object
        const config = {
            view: './components/character-component/character-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Character Page
        super.renderer(config);
    }

    static controller() {
        console.log('Character component initialized...');

        // Back button
        $.event('#back', 'click', () => {
            InnComponent.render('page');
        });
    }
}