// View method that returns the view template string 
module.exports = function() {
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
}