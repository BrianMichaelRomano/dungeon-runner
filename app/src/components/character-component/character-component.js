// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import Components
import { InnComponent } from '../inn-component/inn-component.js';
// Import State
import { state } from '../../services/state.js';

class CharacterComponent {
    constructor() { }

    static render(elementID) {
        // Render Character Page
        renderComponent('./components/character-component/', 'character-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Character component initialized...');

        // Back button
        document.getElementById('back').addEventListener('click', () => {
            InnComponent.render('page');
        });

        // Render page header wish dynamic player name
        document.querySelector('#character-name').innerHTML = `${state.getState().character.name}`;
    }
}

export { CharacterComponent };