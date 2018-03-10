import { renderComponent } from '../../services/render-service.js';

class HomeComponent {
    constructor() { }

    static render(elementID) {
        // Render Home Page
        renderComponent('./components/home-component/', 'home-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Home component initialized...');
    }
}

export { HomeComponent };