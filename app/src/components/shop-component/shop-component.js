// Import Utils
import { Utils as $ } from '../../services/utils.js';
// Import Components
import { Component } from '../../services/component.js';
import { InnComponent } from '../inn-component/inn-component.js';

export class ShopComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/shop-component/shop-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Shop Page
        super.renderer(config);
    }

    static controller() {
        console.log('Shop component initialized...');

        // Back button
        $.event('#back', 'click', () => {
            InnComponent.render('page');
        });
    }
}