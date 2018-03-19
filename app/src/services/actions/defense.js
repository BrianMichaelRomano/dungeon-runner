// Import State
import { State } from '../state.js';
// Import Log
import { Log } from '../log.js';

export class Defense {

    static resolveDefense(type, entity) {

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
            case 'block':
            
            const blockCost = 10;

            
            if(attacker.AP >= blockCost) {
                    Log.logMessage(`${attacker.name} attempts to block incoming damage!`);
                    const state = State.getState();                

                    // what does block do?
                    

                    State.setState(state);
                } else {
                    Log.logMessage(`Not enough AP, ${attacker.name} does nothing...`);
                }
                break;
        
            default:
                break;
        }
    }
}
