// Required Modules
const state = require('../../state/stateController');
const combat = require('../../combat/combatcontroller');

// Export of module object
module.exports = {
        // Loads controller and kicks off view logic
        loadController: function() {
            const dungeonState = state.dungeon.getDungeonState();
            // Checks if dungeon has been entered
            if(dungeonState.status === 'fresh') {
                // load Event Listener for enter button
                document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                    console.log('Dungeon Entered...');
                    // Sets dungeon status state to entered
                    dungeonState.status = 'entered';
                    state.dungeon.setDungeonState(dungeonState);
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
            let player = state.entity.getPlayerState();
            let enemy = state.entity.getSkeletonState();
            let dungeonState = state.dungeon.getDungeonState();

            // Check if enter dungeon button has already been pressed and remove it if so
            if(document.querySelector('#enter-dungeon-btn')) {
                document.querySelector('#enter-dungeon-btn').remove();
            }
            // this is where dungeon messages should be displayed
            document.querySelector('#dungeon-messages').innerHTML = `
                <p>Dungeon has been entered!</p>
            `;

            // Template for entity card views
            document.querySelector('#entity-cards').innerHTML = `
                <div id="player-card">
                    <ul>
                        <li>${player.name}</li>
                        <li>${player.HP}</li>
                        <li>${player.AP}</li>
                        <li>${player.MP}</li>
                    </ul>    
                </div>
                <div id="enemy-card">
                    <ul>
                        <li>${enemy.name}</li>
                        <li>${enemy.HP}</li>
                        <li>${enemy.AP}</li>
                        <li>${enemy.MP}</li>
                    </ul>    
                </div>
            `;

            // Template for action buttons
            document.querySelector('#action-btns').innerHTML = `
                <button id="attack-btn">Attack</button>
                <button id="defend-btn">Defend</button>
                <button id="magic-btn">Use Magic</button>
                <button id="item-btn">Use Item</button>
                <button id="flee-btn">Flee</button>
            `;
            
            // Action Button Listeners
            document.querySelector('#attack-btn').addEventListener('click', () => {
                // TODO: Create attack method to handle most of this logic
                enemy.HP = combat.attack(player, enemy);
                state.entity.setPlayerState(player);
                state.entity.setSkeletonState(enemy);
                dungeonState.turn += 1;
                dungeonState.status = 'inCombat';
                state.dungeon.setDungeonState(dungeonState);
                console.log('Enemy HP:', enemy.HP);
                console.log('Dungeon State: ', dungeonState);
                this.renderDungeon();
            });
        }
    }