// Required Modules
const state = require('../state/stateController');
const combat = require('../combat/combatcontroller');

// Export of module object
module.exports = {
    // View method that returns the view template string 
    viewTemplate: function() {
        const view = `
        <div id="dungeon-view">
        
            <div id="dv-header">
                <h2>Dungeon</h2>
            </div>
        
            <div id="rendered-dungeon">
        
                <button id="enter-dungeon-btn">Enter Dungeon</button>
        
                <div id="dungeon-messages"></div>
        
                <div id="entity-cards"></div>
        
                <div id="action-btns"></div>    
            </div>
        
        </div>
        `;

        return view;
    },
    // Controller for the logic of dungeon view and view rendering
    dungeonController: {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
            });
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
                <p>You are now in the dungeon!</p>
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

}