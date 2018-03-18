import { State } from '../services/state.js';
import { Attack } from './actions/attack.js';
import { DungeonExitComponent } from '../components/dungeon-component/dungeon-exit-component/dungeon-exit-component.js';
import { DungeonEncounterComponent } from '../components/dungeon-component/dungeon-encounter-component/dungeon-encounter-component.js';

export class Combat {

    static turn(action) {
        let state = State.getState();

        state = this.playerTurn(state, action);
        this.enemyTurn(state);


        if(state.enemy.HP <= 0 || state.character.HP <= 0) {
            state.dungeon.view = 'entrance';
            DungeonExitComponent.render('dungeon-view');
        } else {
            State.setState(state);
            DungeonEncounterComponent.render('dungeon-view');
        }
    }

    static playerTurn(state, action) {
        
        const character = state.character;
        const enemy = state.enemy;
        const turn = state.dungeon.turn;

        if(action === 'simple') {
            console.log('Player makes simple attack....');
            enemy.HP -= character.attack;
        }

        return state;
    }

    static enemyTurn(state) {
        
        const character = state.character;
        const enemy = state.enemy;
        const turn = state.dungeon.turn;

        console.log('Enemy makes simple attack....');
        character.HP -= character.attack;
        State.setState(state);
    }
}