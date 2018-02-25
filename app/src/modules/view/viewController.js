module.exports = class ViewController {
    constructor() {
        // select view elements
        this.charAttributeList = document.querySelector('#charAttributeList');
        this.charStatisticsList = document.querySelector('#charStatisticsList');
        this.characterSheet = document.querySelector('#characterSheet');
        this.characterBtn = document.querySelector('#characterBtn');
        this.dungeonRunDisplay = document.querySelector('#dungeonRunDisplay');
        this.dungeonRunBtn = document.querySelector('#dungeonRunBtn');
    }
    // Render Player Attributes In <ul>
    renderAttributes(player) {
        let output = `
            <li>Constitution: ${player.CON}</li>
            <li>Strength: ${player.STR}</li>
            <li>Dexterity: ${player.DEX}</li>
            <li>Intelligence: ${player.INT}</li>
            <li>Wisdom: ${player.WIS}</li>
        `;

        // Log player attributes used in template 
        console.log('View Rendered Player Attributes: ',player);
        // set <ul> innerHTML to template output
        this.charAttributeList.innerHTML = output;
    }

    // Render Player Statistics in <ul>
    renderStatistics(playerStats) {
        let output = `
        <li>Hit Points: ${playerStats.HP}</li>
        <li>Action Points: ${playerStats.AP}</li>
        <li>Magic Points: ${playerStats.MP}</li>
        <li>Armor Rating: ${playerStats.AR}</li>
        <li>Defense Rating: ${playerStats.DR}</li>
        <li>Attack Chance: ${playerStats.AC}</li>
        <li>Magic Chance: ${playerStats.MC}</li>
        <li>Weapon Effect Rating: ${playerStats.WER}</li>
        <li>Magic Effect Rating: ${playerStats.MER}</li>
        <li>Initiative: ${playerStats.IR}</li>
    `;

    // Log player Statistics used in template 
    console.log('View Rendered Player Stats: ',playerStats);
    // set <ul> innerHTML to template output
    this.charStatisticsList.innerHTML = output;
    }

    // Toggle the character sheet in view
    toggleCharacterSheet() {
        if(this.characterSheet.style.display === 'none') {
            this.characterSheet.style.display = 'block';
        } else {
            this.characterSheet.style.display = 'none';
        };
    }

    toggleDungeonRunDisplay() {
        if(this.dungeonRunDisplay.style.display === 'none') {
            this.dungeonRunDisplay.style.display = 'block';
        } else {
            this.dungeonRunDisplay.style.display = 'none';
        };
    }
}