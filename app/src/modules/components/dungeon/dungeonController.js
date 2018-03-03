// Required Modules
const storageState = require('../../state/stateController');
const combat = require('../../combat/combatcontroller');
const dungeonViews = require('../dungeon/dungeonView');
const _ = require('../../libraries/helperFunctions');

// Export of module object
module.exports = {
        // Loads controller and kicks off view logic
        controller: function() {
            const dungeonState = storageState.dungeon.getDungeonState();
            // Checks if dungeon has been entered
            if(dungeonState.status === 'fresh') {
                // load Event Listener for enter button
                _.element('#enter-dungeon-btn').addEventListener('click', () => {
                    console.log('Dungeon Entered...');
                    // Sets dungeon status state to entered
                    dungeonState.status = 'entered';
                    storageState.dungeon.setDungeonState(dungeonState);
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
            // Get states that exists or create new states if non exist
            let varStates = {
                player: storageState.entity.getPlayerState(),
                enemy: storageState.entity.getSkeletonState(),
                dungeonState: storageState.dungeon.getDungeonState()
            }

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
                // TODO: Create attack method to handle most of this logic
                varStates.enemy.HP = combat.attack(varStates.player, varStates.enemy);
                storageState.entity.setPlayerState(varStates.player);
                storageState.entity.setSkeletonState(varStates.enemy);
                varStates.dungeonState.turn += 1;
                varStates.dungeonState.status = 'inCombat';
                storageState.dungeon.setDungeonState(varStates.dungeonState);
                console.log('Enemy HP:', varStates.enemy.HP);
                console.log('Dungeon State: ', varStates.dungeonState);
                this.renderDungeon();
            });
        }
    }