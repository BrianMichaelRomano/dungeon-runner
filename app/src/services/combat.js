import { State } from '../services/state.js';
import { Attack } from './actions/attack.js';
import { Defense } from './actions/defense.js';
import { DungeonExitComponent } from '../components/dungeon-component/dungeon-exit-component/dungeon-exit-component.js';
import { DungeonEncounterComponent } from '../components/dungeon-component/dungeon-encounter-component/dungeon-encounter-component.js';

export class Combat {

    static turn(type, action) {
        
        this.entityTurn(action, type);
        this.entityTurn('attack', 'simple', 'enemy');
        
        this.endTurn();
    }

    
    static entityTurn(action, type, entity = 'character') {       
        
        switch (action) {
            case 'attack':
                Attack.resolveAttack(type, entity);
                break;

            case 'defense':
                Defense.resolveDefense(type, entity);
                break;  
            
            default:
                break;
        }
    }

    
    static endTurn() {

        const state = State.getState();

        if(state.enemy.HP <= 0 || state.character.HP <= 0) {
            state.dungeon.view = 'entrance';
            DungeonExitComponent.render('dungeon-view');
        } else {
            State.setState(state);
            DungeonEncounterComponent.render('dungeon-view');
        }
    }
}