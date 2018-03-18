import { State } from '../services/state.js';
import { Attack } from './actions/attack.js';
import { DungeonExitComponent } from '../components/dungeon-component/dungeon-exit-component/dungeon-exit-component.js';
import { DungeonEncounterComponent } from '../components/dungeon-component/dungeon-encounter-component/dungeon-encounter-component.js';

export class Combat {

    static turn(type, action) {
        let state = State.getState();

        state = this.playerTurn(state, action, type);
        this.enemyTurn(state, 'attack', 'simple');


        if(state.enemy.HP <= 0 || state.character.HP <= 0) {
            state.dungeon.view = 'entrance';
            DungeonExitComponent.render('dungeon-view');
        } else {
            State.setState(state);
            DungeonEncounterComponent.render('dungeon-view');
        }
    }

    static playerTurn(state, action, type) {

        let resolvedState;

        switch (action) {
            case 'attack':
                resolvedState = Attack.resolveAttack(state, type, 'character');
                break;
        
            default:
                break;
        }

        return resolvedState;
    }

    static enemyTurn(state, action, type) {
        
        let resolvedState;
        
                switch (action) {
                    case 'attack':
                        resolvedState = Attack.resolveAttack(state, type, 'enemy');
                        break;
                
                    default:
                        break;
                }
        
                return resolvedState;
    }
}