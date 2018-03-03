module.exports = {
    // Performs an attack based on attacker vs defender
    attack: function(attacker, defender) {
        console.log(`${attacker.name} does ${attacker.ATT} damage to ${defender.name}`);
        
        // Return result new Hit Point value after attack
        return defender.HP - attacker.ATT;
    }
}