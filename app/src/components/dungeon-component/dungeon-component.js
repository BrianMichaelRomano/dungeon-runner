// Render Component
function dungeonRender() {
    console.log('Initialize Dungeon Component...');
    // Render Entity names
    document.querySelector('#player-card').innerHTML = 'Firecore';
    document.querySelector('#enemy-card').innerHTML = 'Skeleton';
}

// Exports
export { 
    dungeonRender
}