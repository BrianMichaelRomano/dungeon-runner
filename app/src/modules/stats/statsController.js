module.exports = {


    getCalculatedStats(entity) {
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

        const entityStats = {
            HP: 100 + entity.CON + entity.STR,
            AP: 10 + entity.DEX + entity.CON,
            MP: entity.INT * 2,
            AR: null,
            DR: entity.CON + entity.DEX,
            AC: entity.DEX + entity.STR,
            MC: entity.WIS,
            WER: null,
            MER: entity.INT + entity.WIS,
            IR: entity.DEX,
        };

        return entityStats;
    }
}