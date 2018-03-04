// Required Modules
const storageState = require('../../state/stateController');
const combat = require('../../actions/combat/combatcontroller');
const dungeonViews = require('../dungeon/dungeonView');
const _ = require('../../libraries/helperFunctions');

// Export of module object
module.exports = {
    
    // Dungeon Controller Object
    controller: {

        // Render dungeon entrance
        renderEntrance: function() {
            // Checks if dungeon has been entered
            if(storageState.dungeon.getDungeonState().status === 'fresh') {
                // Render entrance view
                _.element('#entrance').innerHTML = dungeonViews.entrance();
                // load Event Listener for enter button
                _.element('#enter-dungeon-btn').addEventListener('click', () => {
                    // Sets dungeon status state to entered
                    storageState.dungeon.setDungeonStateProperty('status', 'entered');
                    // Clear entrance view
                    _.element('#entrance').innerHTML = '';
                    // Render dungeon
                    this.renderDungeon();
                });
            } else {
                // Clear entrance view
                _.element('#entrance').innerHTML = '';
                // Render dungeon         
                this.renderDungeon();
            }
        },

        // Renders dungeon view
        renderDungeon: function() {
            // Get all states in storage
            const varStates = storageState.getAllStates();
            // this is where dungeon messages should be displayed
            _.element('#dungeon-messages').innerHTML = dungeonViews.dungeonMessages('Running dungeon!');
            // Template for entity card views
            _.element('#entity-cards').innerHTML = dungeonViews.entityCards(varStates);
            // Template for action buttons
            _.element('#action-btns').innerHTML = dungeonViews.actionButtons();
            // Action Button Listeners
            _.element('#attack-btn').addEventListener('click', () => {
                this.attackBtnPressed();
            });
        },

        // Attack Button Pressed
        attackBtnPressed : function() {
            // Perform attack on enemy
            combat.attack();
            this.renderDungeon();
        }
    }
}