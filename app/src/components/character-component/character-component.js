// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import Components
import { InnComponent } from '../inn-component/inn-component.js';

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
    }
}

export { CharacterComponent };