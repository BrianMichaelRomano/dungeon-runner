

module.exports = {
    // Performs an attack based on attacker vs defender
    attack: function(varStates) {

        console.log('Attacking...');
        // console.log(`${attacker.name} does ${attacker.ATT} damage to ${defender.name}`);
        
        // // Return result new Hit Point value after attack
        // return defender.HP - attacker.ATT;
    }
}

// let varStates = {
//     player: storageState.entity.getPlayerState(),
//     enemy: storageState.entity.getSkeletonState(),
//     dungeonState: storageState.dungeon.getDungeonState()
// }

// // TODO: Create attack method to handle most of this logic
// varStates.enemy.HP = combat.attack(varStates.player, varStates.enemy);
// storageState.entity.setPlayerState(varStates.player);
// storageState.entity.setSkeletonState(varStates.enemy);
// varStates.dungeonState.turn += 1;
// varStates.dungeonState.status = 'inCombat';
// storageState.dungeon.setDungeonState(varStates.dungeonState);
// console.log('Enemy HP:', varStates.enemy.HP);
// console.log('Dungeon State: ', varStates.dungeonState);
// this.renderDungeon();