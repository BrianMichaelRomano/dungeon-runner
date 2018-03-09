function dungeonRender() {
    console.log('Initialize Dungeon Component...');
    document.querySelector('#player-card').innerHTML = 'Firecore';
    document.querySelector('#enemy-card').innerHTML = 'Skeleton';
}

export { 
    dungeonRender
}