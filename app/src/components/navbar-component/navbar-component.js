import {
    renderComponent
} from '../../services/render-service.js';


class NavbarComponent {
    constructor() { }

    render(component, elementID) {
        // Render Navigation Bar
        renderComponent(component, elementID);
    }
}

export let navbarComponent = new NavbarComponent();