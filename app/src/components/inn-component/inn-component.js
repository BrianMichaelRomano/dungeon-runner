import { renderComponent } from '../../services/render-service.js';

class InnComponent {
    constructor() { }

    static render(elementID) {
        // Render Inn Page
        renderComponent('./components/inn-component/', 'inn-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Inn component initialized...');
    }
}

export { InnComponent };