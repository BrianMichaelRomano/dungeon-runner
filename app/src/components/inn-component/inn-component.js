// Import Renderer
import { renderComponent } from '../../services/render-service.js';
// Import State
import { state } from '../../services/state.js';
// Import Components
import { DungeonComponent } from '../dungeon-component/dungeon-component.js';


class InnComponent {
    constructor() { }

    static render(elementID) {
        // Render Inn Page
        renderComponent('./components/inn-component/', 'inn-component', elementID, this.initAfterViewRender);
    }

    static initAfterViewRender() {
        console.log('Inn component initialized...');

        // Render page header wish dynamic player name
        document.querySelector('#inn h2').innerHTML = `${state.getState().character.name}'s Lodging`;

        // Button and Menu listeners
        document.getElementById('find-dungeon-btn').addEventListener('click', () => {
            console.log('Finding dungeon...');
            DungeonComponent.render('page');
        });
    }
}

export { InnComponent };