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


        if(type === 'simple') {
            console.log(`${attacker.entity} makes simple attack....`);

            state[defender.entity].HP = defender.HP -= attacker.attack;
        }

        return state;
    }

    static simple() {
        console.log('Simple attack made...');
    }
}
