// Renderer
import { renderComponent } from '../../services/render-service.js';

// Page Components
import { HomeComponent } from '../home-component/home-component.js';
import { DungeonComponent } from '../dungeon-component/dungeon-component.js';
import { ShopComponent } from '../shop-component/shop-component.js';
import { CharacterComponent } from '../character-component/character-component.js';
import { InventoryComponent } from '../inventory-component/inventory-component.js';



class NavbarComponent {
    constructor() { }

    static render(elementID) {
        // Render Navigation Bar
        renderComponent('./components/navbar-component/', 'navbar-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {

        // Default page load
        HomeComponent.render('page');

        // Nav Listener
        document.querySelector('nav').addEventListener('click', (e) => {
            const parsedNav = e.target.id.substr(1).split('-')[0];

            // Render selected route
            switch (parsedNav) {
                case 'home':
                    HomeComponent.render('page');
                    break;
                case 'dungeon':
                    DungeonComponent.render('page');
                    break;
                case 'shop':
                    ShopComponent.render('page');
                    break;
                case 'character':
                    CharacterComponent.render('page');
                    break;                
                case 'inventory':
                    InventoryComponent.render('page');
                    break;
                default:
                    HomeComponent.render('page');                
                    break;
            }
        });
    }
}

export {
    NavbarComponent
};