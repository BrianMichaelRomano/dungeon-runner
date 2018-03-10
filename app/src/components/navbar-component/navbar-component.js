import {
    renderComponent
} from '../../services/render-service.js';


class NavbarComponent {
    constructor() { }

    static render(elementID) {
        // Render Navigation Bar
        renderComponent('./components/navbar-component/', 'navbar-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        // Nav Listener
        document.querySelector('nav').addEventListener('click', (e) => {
            const parsedNav = e.target.id.substr(1).split('-')[0];

            console.log(parsedNav);
        });
    }
}

export {
    NavbarComponent
};