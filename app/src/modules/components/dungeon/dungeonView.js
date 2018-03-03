module.exports = {
    mainView: function() {
        // Main view template string
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
    
        // Return Main view template string
        return view;
    },

    entityCards: function(states) {
        // Entity cards view template string
        const view = `
            <div id="player-card">
                <ul>
                    <li>${states.player.name}</li>
                    <li>${states.player.HP}</li>
                    <li>${states.player.AP}</li>
                    <li>${states.player.MP}</li>
                </ul>    
            </div>
            <div id="enemy-card">
                <ul>
                    <li>${states.enemy.name}</li>
                    <li>${states.enemy.HP}</li>
                    <li>${states.enemy.AP}</li>
                    <li>${states.enemy.MP}</li>
                </ul>    
            </div>
        `;
        
        // Return Entity cards view template string
        return view;
    },

    // Action Buttons view template string
    actionButtons: function() {
        const view = `
            <button id="attack-btn">Attack</button>
            <button id="defend-btn">Defend</button>
            <button id="magic-btn">Use Magic</button>
            <button id="item-btn">Use Item</button>
            <button id="flee-btn">Flee</button>
        `;

        // Return Actions Buttons view template string
        return view;
    }

}