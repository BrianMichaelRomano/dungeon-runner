import {
    getState,
    setState
} from '../../modules/state.js';

// Render Component
function dungeonRender() {
    console.log('Initialize Dungeon Component...');
    
    // Run dungeon button listener
    document.querySelector('#run-dungeon-btn').addEventListener('click', enterDungeon);

    // Action menu listener
    document.querySelector('#action-btns').addEventListener('click', (e) => {
        const menuActions = [
            'attack',
            'defense',
            'magic',
            'item',
            'flee'
        ];

        const btnSelected = e.target.id;
        const menuSelected = btnSelected.split('-');
        document.getElementById(`${menuSelected[0]}-menu`).style.display = 'flex';
        menuActions.forEach((menu) => {
            if(menu !== menuSelected[0]) {
                document.getElementById(`${menu}-menu`).style.display = 'none';        
            }
        });
    });

    const state = getState();

    // Show view by status
    if(state.dungeonStatus === 'entrance') {
        console.log('You are at the entrance!');
    } else if(state.dungeonStatus === 'entered') {
        document.getElementById('entrance-view').style.display = 'none';
        document.getElementById('entered-view').style.display = 'flex';
        console.log('You are inside the dungeon!');
    } else {
        console.log('You at the dungeon exit!');        
    }

    // Render Entity names
    document.querySelector('#player-card').innerHTML = `
        <h4>${state.player.name}</h4>
        HP: ${state.player.HP}
    `;
    document.querySelector('#enemy-card').innerHTML = `
        <h4>${state.enemy.name}</h4>
        HP: ${state.enemy.HP}
    `;

}

// Enter Dungeon
function enterDungeon() {
    const state = getState();
    state.dungeonStatus = 'entered';
    setState(state);
    dungeonRender();
}

// Exports
export { 
    dungeonRender
}