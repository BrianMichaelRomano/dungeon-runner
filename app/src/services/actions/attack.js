export class Attack {

    static resolveAttack(state, type, entity) {

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
                console.log(`${attacker.entity} makes simple attack....`);
            
                const simpleAttackCost = 10;
    
                if(attacker.AP >= simpleAttackCost) {
                    state[defender.entity].HP = defender.HP -= attacker.attack;
                    state[attacker.entity].AP = attacker.AP - simpleAttackCost;
                } else {
                    console.warn(`Not enough AP, ${attacker.name} does nothing...`);
                }
                break;
        
            default:
                break;
        }

        return state;
    }
}
