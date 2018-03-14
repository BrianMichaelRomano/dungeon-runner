// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import State
import { state } from '../../services/state.js';
// Import Components
import { InnComponent } from '../inn-component/inn-component.js';

export class NewgameComponent {
    constructor() { }

    static render(elementID) {
        // Render Character Page
        renderComponent('./components/newgame-component/', 'newgame-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
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