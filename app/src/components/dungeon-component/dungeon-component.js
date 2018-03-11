// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import State
import { state } from '../../services/state.js';
// Import dungeon sub components
import { DungeonEntranceComponent } from './dungeon-entrance-component/dungeon-entrance-component.js';
import { DungeonCombatComponent } from './dungeon-combat-component/dungeon-combat-component.js';
import { DungeonExitComponent } from './dungeon-exit-component/dungeon-exit-component.js';

class DungeonComponent {
    constructor() { }

    static render(elementID) {
        // Render Dungeon Page
        renderComponent('./components/dungeon-component/', 'dungeon-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Dungeon component initialized...');

        // Get last saved dungeonView
        const dungeonView = state.getState().dungeon.view;

        // Render dungeon sub view conditionally
        if(dungeonView === 'entrance') {
            DungeonEntranceComponent.render('dungeon-view');
        } else if(dungeonView === 'combat') {
            DungeonCombatComponent.render('dungeon-view');
        } else if(dungeonView === 'exit') {
            DungeonExitComponent.render('dungeon-view');         
        };
    }
}

export { DungeonComponent };