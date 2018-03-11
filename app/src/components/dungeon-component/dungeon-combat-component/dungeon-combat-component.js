// Import renderer
import { renderComponent } from '../../../services/render-service.js';

class DungeonCombatComponent {
    constructor() { }

    static render(elementID) {
        // Render Dungeon Combat Sub Page
        renderComponent('./components/dungeon-component/dungeon-combat-component/', 'dungeon-combat-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Dungeon combat component initialized...');
    }
}

export { DungeonCombatComponent };