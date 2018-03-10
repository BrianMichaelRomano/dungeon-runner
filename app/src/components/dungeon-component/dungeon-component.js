import { renderComponent } from '../../services/render-service.js';

class DungeonComponent {
    constructor() { }

    static render(elementID) {
        // Render Dungeon Page
        renderComponent('./components/dungeon-component/', 'dungeon-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Dungeon component initialized...');
    }
}

export { DungeonComponent };