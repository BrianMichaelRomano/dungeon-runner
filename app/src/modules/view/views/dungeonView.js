const view = `
<div id="dungeon-view">

    <div id="dv-header">
        <h2>Dungeon</h2>
    </div>
    <button id="enter-dungeon-btn">Enter Dungeon</button>

</div>
`;

module.exports = {
    template: view,
    viewController: {
        loadListeners: function() {
            // load Event Listeners
            document.querySelector('#enter-dungeon-btn').addEventListener('click', () => {
                console.log('Entering Dungeon...');
            });
        }
    }
}