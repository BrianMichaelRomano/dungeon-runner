const state = require('../state/stateController');
const combat = require('../combat/combatcontroller');

module.exports = {
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
    dungeonController: {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
                state.dungeon.setDungeonState('entered');
            });
        },
        renderDungeon: function() {
            let player = state.entity.getPlayerState();
            let enemy = state.entity.getSkeletonState();

            if(document.querySelector('#enter-dungeon-btn')) {
                document.querySelector('#enter-dungeon-btn').remove();
            }
            document.querySelector('#dungeon-messages').innerHTML = `
                <p>You are now in the dungeon!</p>
            `;
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
            document.querySelector('#action-btns').innerHTML = `
                <button id="attack-btn">Attack</button>
                <button id="defend-btn">Defend</button>
                <button id="magic-btn">Use Magic</button>
                <button id="item-btn">Use Item</button>
                <button id="flee-btn">Flee</button>
            `;
            // Action Button Listeners
            document.querySelector('#attack-btn').addEventListener('click', () => {
                enemy.HP = combat.attack(player, enemy);
                console.log(enemy.HP);
                state.entity.setPlayerState(player);
                state.entity.setSkeletonState(enemy);
                this.renderDungeon();
            });
        }
    }

}