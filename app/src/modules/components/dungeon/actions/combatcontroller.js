const storageState = require('../../../state/stateController');

module.exports = {
    // Performs an attack 
    basicAttack: function() {

        // State variables
        const state = storageState.getAllStates();
        const enemy = state.enemy;
        const player = state.player;
        const dungeon = state.dungeon;
        
        // Resovle attack
        enemy.HP = enemy.HP - player.ATT;
        // Save results in storage
        storageState.entity.setSkeletonState(enemy);
        // increment turn
        state.dungeon.turn += 1;
        // ensure dungeon status is inCombat
        state.dungeon.status = 'inCombat';
        // Save dungeon state to storage
        storageState.dungeon.setDungeonState(dungeon);    
    }
}