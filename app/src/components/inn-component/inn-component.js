// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import State
import { state } from '../../services/state.js';
// Import Components
import { DungeonComponent } from '../dungeon-component/dungeon-component.js';
import { CharacterComponent } from '../character-component/character-component.js';
import { ShopComponent } from '../shop-component/shop-component.js';
import { InventoryComponent } from '../inventory-component/inventory-component.js';


export class InnComponent {
    constructor() { }

    static render(elementID) {
        // Render Inn Page
        renderComponent('./components/inn-component/', 'inn-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Inn component initialized...');

        // Render page header wish dynamic player name
        document.querySelector('#inn h2').innerHTML = `${state.getState().character.name}'s Lodging`;

        // Button and Menu listener
        document.getElementById('inn-menu').addEventListener('click', (e) => {
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