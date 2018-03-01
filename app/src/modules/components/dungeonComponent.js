const state = require('../state/stateController');
const combat = require('../combat/combatcontroller');

const player = state.entity.getPlayerState();
const enemy = state.entity.getSkeleton();

const view = `
<div id="dungeon-view">

    <div id="dv-header">
        <h2>Dungeon</h2>
    </div>
    <button id="enter-dungeon-btn">Enter Dungeon</button>

    <div id="dungeon-messages"></div>

    <div id="entity-cards"></div>

    <div id="action-btns"></div>    

</div>
`;

module.exports = {
    template: view,
    dungeonController: {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
            });
        },
        renderDungeon: function() {
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
                this.renderDungeon();
            });
        }
    }

}