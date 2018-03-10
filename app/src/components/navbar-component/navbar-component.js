import {
    renderComponent
} from '../../services/render-service.js';


class NavbarComponent {
    constructor() { }

    render(elementID) {
        // Render Navigation Bar
        renderComponent('./components/navbar-component/', 'navbar-component', elementID);
    }
}

export let navbarComponent = new NavbarComponent();