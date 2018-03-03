// Required Modules
const storageState = require('../../state/stateController');
const combat = require('../../combat/combatcontroller');
const dungeonViews = require('../dungeon/dungeonView');
const _ = require('../../libraries/helperFunctions');

// Export of module object
module.exports = {
    
    // Dungeon Controller Object
    controller: {

        // Render dungeon entrance
        renderDungeonEntrance: function() {

            // Checks if dungeon has been entered
            if(storageState.dungeon.getDungeonState().status === 'fresh') {
                // load Event Listener for enter button
                _.element('#enter-dungeon-btn').addEventListener('click', () => {
                    // Sets dungeon status state to entered
                    storageState.dungeon.setDungeonStateProperty('status', 'entered');
                    // Render dungeon
                    this.renderDungeon();
                });
            } else {
                // Render dungeon                
                this.renderDungeon();
            }
        },
        // Renders dungeon view
        renderDungeon: function() {
            
            // Get all states in storage
            const varStates = storageState.getAllStates();
            
            // Check if enter dungeon button has already been pressed and remove it if so
            if(_.element('#enter-dungeon-btn')) {
                _.element('#enter-dungeon-btn').remove();
            }
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
            const varStates = storageState.getAllStates();
            combat.attack(varStates);
        }
    }
}