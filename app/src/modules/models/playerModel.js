module.exports =  class PlayerModel {
    constructor(name) {
        // Attributes
        // CON: Constitution
        // STR: Stregth
        // DEX: Dexterity
        // INT: Intelligence
        // WIS: Wisdom

        this.name = name;
        this.CON = 10;
        this.STR = 10;
        this.DEX = 10;
        this.INT = 10;
        this.WIS = 10;
    }

    getCalculatedStats() {
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
            HP: 10 + this.CON + this.STR,
            AP: 10 + this.DEX + this.CON,
            MP: this.INT * 10,
            AR: null,
            DR: this.CON + this.DEX,
            AC: this.DEX + this.STR,
            MC: this.WIS,
            WER: null,
            MER: this.INT + this.WIS,
            IR: this.DEX,
        };

        return playerStats;
    }
}
