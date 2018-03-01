module.exports = {
    attack: function(player, enemy) {
        console.log(`${player.name} does ${player.ATT} damage to ${enemy.name}`);
        return enemy.HP - player.ATT;
    }
}