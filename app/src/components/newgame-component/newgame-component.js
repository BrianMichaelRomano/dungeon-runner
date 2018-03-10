import { renderComponent } from '../../services/render-service.js';

class NewgameComponent {
    constructor() { }

    static render(elementID) {
        // Render Character Page
        renderComponent('./components/newgame-component/', 'newgame-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Newgame component initialized...');
    }
}

export { NewgameComponent };