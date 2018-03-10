import { renderComponent } from '../../services/render-service.js';

class ShopComponent {
    constructor() { }

    static render(elementID) {
        // Render Shop Page
        renderComponent('./components/shop-component/', 'shop-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Shop component initialized...');
    }
}

export { ShopComponent };