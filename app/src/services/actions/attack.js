// Import State
import { State } from '../state.js';
// Import Log
import { Log } from '../log.js';

export class Attack {

    static resolveAttack(type, entity) {

        const state = State.getState();        

        let attacker;
        let defender; 
        const turn = state.dungeon.turn;
        
        if(entity === 'character') {
            attacker = state.character;
            attacker.entity = 'character';

            defender = state.enemy;
            defender.entity = 'enemy';
        } else {
            attacker = state.enemy;
            attacker.entity = 'enemy';

            defender = state.character;
            defender.entity = 'character';
        }


        switch (type) {
            case 'simple':
            
            const simpleAttackCost = 10;

            Log.logMessage(`${attacker.name} makes simple attack for ${attacker.attack} damage!`);
    
                if(attacker.AP >= simpleAttackCost) {
                    const state = State.getState();                
                    state[defender.entity].HP = defender.HP -= attacker.attack;
                    state[attacker.entity].AP = attacker.AP - simpleAttackCost;
                    State.setState(state);
                } else {
                    console.warn(`Not enough AP, ${attacker.name} does nothing...`);
                }
                break;
        
            default:
                break;
        }
    }
}
