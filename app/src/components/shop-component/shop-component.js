// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import Components
import { InnComponent } from '../inn-component/inn-component.js';

export class ShopComponent {
    constructor() { }

    static render(elementID) {
        // Render Shop Page
        renderComponent('./components/shop-component/', 'shop-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Shop component initialized...');

        // Back button
        document.getElementById('back').addEventListener('click', () => {
            InnComponent.render('page');
        });
    }
}