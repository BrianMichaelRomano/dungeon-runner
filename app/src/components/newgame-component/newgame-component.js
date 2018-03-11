// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import State
import { state } from '../../services/state.js';
// Import Components
import { InnComponent } from '../inn-component/inn-component.js';

class NewgameComponent {
    constructor() { }

    static render(elementID) {
        // Render Character Page
        renderComponent('./components/newgame-component/', 'newgame-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Newgame component initialized...');

        // Check if state already exists
            // If state already exists render Inn Component
        if(state.getState()) {
            console.log('Render Inn Component');
            InnComponent.render('page');
        }

        // select input and buttons

        // add listener on button to save entered name to state

        // render Inn Component on submit of character name
    }
}

export { NewgameComponent };