// Import State
import { State } from '../../services/state.js';
// Import Utils
import { Utils as $ } from '../../services/utils.js';
// Import Components
import { Component } from '../../services/component.js';
import { DungeonComponent } from '../dungeon-component/dungeon-component.js';
import { CharacterComponent } from '../character-component/character-component.js';
import { ShopComponent } from '../shop-component/shop-component.js';
import { InventoryComponent } from '../inventory-component/inventory-component.js';


export class InnComponent extends Component {
    constructor() { }

    static render(elementID) {
        
        // Configuration Object
        const config = {
            view: './components/inn-component/inn-component.html',
            element: elementID,
            callback: this.controller,
            data: State.getState()
        }

        // Render Inn Page
        super.renderer(config);
    }

    static controller() {
        console.log('Inn component initialized...');

        // Navigation Buttons
        $.event('#inn-menu', 'click', (e) => {
            // Navigation 
            switch (e.target.id) {
                case 'dungeon-btn':
                    DungeonComponent.render('page');
                    break;
                case 'character-btn':
                    CharacterComponent.render('page');
                    break;
                case 'shop-btn':
                    ShopComponent.render('page');
                    break;
                case 'inventory-btn':
                    InventoryComponent.render('page');
                    break;
            }
        });
    }
}