// Import Utils
import { Utils as $ } from '../../services/utils.js';
// Import Components
import { Component } from '../../services/component.js';
import { InnComponent } from '../inn-component/inn-component.js';

export class InventoryComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/inventory-component/inventory-component.html',
            element: elementID,
            callback: this.controller
        }

        // Render Inventory Page
        super.renderer(config);
    }

    static controller() {
        console.log('Inventory component initialized...');

        // Back button
        $.event('#back', 'click', () => {
            InnComponent.render('page');
        });
    }
}