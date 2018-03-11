// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import State
import { state } from '../../services/state.js';

class InnComponent {
    constructor() { }

    static render(elementID) {
        // Render Inn Page
        renderComponent('./components/inn-component/', 'inn-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Inn component initialized...');

        // Render page header wish dynamic player name
        document.querySelector('#inn h2').innerHTML = `${state.getState().character.name}'s Lodging`;
    }
}

export { InnComponent };