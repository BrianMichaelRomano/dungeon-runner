// Import renderer
import { renderComponent } from '../../../services/render-service.js';

class DungeonEntranceComponent {
    constructor() { }

    static render(elementID) {
        // Render Dungeon Entrance Sub Page
        renderComponent('./components/dungeon-component/dungeon-entrance-component/', 'dungeon-entrance-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Dungeon entrance component initialized...');
    }
}

export { DungeonEntranceComponent };