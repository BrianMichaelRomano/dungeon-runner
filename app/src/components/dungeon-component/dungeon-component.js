import {
    getState,
    setState
} from '../../modules/state.js';

// Render Component
function dungeonRender() {
    console.log('Initialize Dungeon Component...');

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
    document.querySelector('#player-card').innerHTML = 'Firecore';
    document.querySelector('#enemy-card').innerHTML = 'Skeleton';

    // Run dungeon button listener
    document.querySelector('#run-dungeon-btn').addEventListener('click', enterDungeon);
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