// Import renderer
import { renderComponent } from '../../services/render-service.js';
// Import dungeon sub components
import { DungeonEntranceComponent } from './dungeon-entrance-component/dungeon-entrance-component.js';

class DungeonComponent {
    constructor() { }

    static render(elementID) {
        // Render Dungeon Page
        renderComponent('./components/dungeon-component/', 'dungeon-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Dungeon component initialized...');
        DungeonEntranceComponent.render('dungeon-view');
    }
}

export { DungeonComponent };