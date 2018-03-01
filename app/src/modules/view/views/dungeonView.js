const state = require('../../state/stateController');

const player = state.entity.getPlayerState();
const enemy = state.entity.getNewSkeleton();

const view = `
<div id="dungeon-view">

    <div id="dv-header">
        <h2>Dungeon</h2>
    </div>
    <button id="enter-dungeon-btn">Enter Dungeon</button>

    <div id="dungeon-messages"></div>

    <div id="entity-cards"></div>

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
            document.querySelector('#enter-dungeon-btn').remove();
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
        }
    }

}