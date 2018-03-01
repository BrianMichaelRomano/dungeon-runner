const state = require('../../state/stateController');

const player = state.entity.getPlayer();
const enemy = state.entity.getSkeleton();

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
    viewController: {
        // Event Listeners
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Dungeon Entered...');
                this.renderDungeon();
            });
        },
        renderDungeon: function() {
            document.querySelector('#dungeon-messages').innerHTML = `
                <p>You are now in the dungeon!</p>
            `;
            document.querySelector('#entity-cards').innerHTML = `
                <div id="player-card">${player.name}</div>
                <div id="enemy-card">${enemy.name}</div>
            `
        }
    }

}