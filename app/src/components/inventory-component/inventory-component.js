import { renderComponent } from '../../services/render-service.js';

class InventoryComponent {
    constructor() { }

    static render(elementID) {
        // Render Inventory Page
        renderComponent('./components/inventory-component/', 'inventory-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Inventory component initialized...');
    }
}

export { InventoryComponent };