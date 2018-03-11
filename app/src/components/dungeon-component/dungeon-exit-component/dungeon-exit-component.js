// Import renderer
import { renderComponent } from '../../../services/render-service.js';

class DungeonExitComponent {
    constructor() { }

    static render(elementID) {
        // Render Dungeon Exit Sub Page
        renderComponent('./components/dungeon-component/dungeon-exit-component/', 'dungeon-exit-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Dungeon exit component initialized...');
    }
}

export { DungeonExitComponent };