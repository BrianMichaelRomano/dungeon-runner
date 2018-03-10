import { renderComponent } from '../../services/render-service.js';

class CharacterComponent {
    constructor() { }

    static render(elementID) {
        // Render Navigation Bar
        renderComponent('./components/character-component/', 'character-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Character component initialized...');
    }
}

export { CharacterComponent };