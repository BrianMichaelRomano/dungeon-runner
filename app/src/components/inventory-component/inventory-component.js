// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import Components
import { InnComponent } from '../inn-component/inn-component.js';

class InventoryComponent {
    constructor() { }

    static render(elementID) {
        // Render Inventory Page
        renderComponent('./components/inventory-component/', 'inventory-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Inventory component initialized...');

        // Back button
        document.getElementById('back').addEventListener('click', () => {
            InnComponent.render('page');
        });
    }
}

export { InventoryComponent };