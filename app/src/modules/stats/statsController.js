module.exports = class StatsController {
    constructor() {
         
    }

    getCalculatedStats(player) {
        // Statistics
        // HP: Hit Points - CON, STR
        // AP: Action Points - DEX, CON
        // MP: Magic Points - INT
        // AR: Armor Rating - Based on equipment
        // DR: Defense Rating - CON, DEX
        // AC: Attack Chance - DEX, STR
        // MC: Magic Chance - WIS
        // WER: Weapon Effect Rating - Weapon, STR
        // MER: Magic Effect Rating - INT, WIS
        // IR: Initiative Rating - DEX

        const playerStats = {
            HP: 10 + player.CON + player.STR,
            AP: 10 + player.DEX + player.CON,
            MP: player.INT * 10,
            AR: null,
            DR: player.CON + player.DEX,
            AC: player.DEX + player.STR,
            MC: player.WIS,
            WER: null,
            MER: player.INT + player.WIS,
            IR: player.DEX,
        };

        return playerStats;
    }
}