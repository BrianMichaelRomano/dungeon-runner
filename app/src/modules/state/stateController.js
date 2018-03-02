module.exports = {
    clearState: function() {
        localStorage.removeItem('view');
        localStorage.removeItem('player');   
        localStorage.removeItem('skeleton');   
        localStorage.removeItem('dungeon');   
        console.log('State reset!')     
    },
    view: {
        // Set view state
        setViewState(view) {
            localStorage.setItem('view', JSON.stringify(view));
        },
        // Get view state
        getViewState() {
            return JSON.parse(localStorage.getItem('view'));
        }
    },
    entity: {
        getNewPlayer() {
            const player = {
                name: 'Firecore',
                HP: 100,
                AP: 80,
                MP: 60,
                ATT: 10
            }
            return player;
        },
        getNewSkeleton() {
            const skeleton = {
                name: 'Skeleton',
                HP: 80,
                AP: 60,
                MP: 40,
                ATT: 10
            }
            return skeleton;
        },
        getPlayerState() {
            if(localStorage.getItem('player') === null) {
                return this.getNewPlayer();
            } else {
                return JSON.parse(localStorage.getItem('player'));
            }
        },
        setPlayerState(player) {
            localStorage.setItem('player', JSON.stringify(player));
        },
        getSkeletonState() {
            if(localStorage.getItem('skeleton') === null) {
                return this.getNewSkeleton();
            } else {
                return JSON.parse(localStorage.getItem('skeleton'));
            }
        },
        setSkeletonState(skeleton) {
            localStorage.setItem('skeleton', JSON.stringify(skeleton));
        }
    },
    dungeon: {
        setDungeonState(state) {
            localStorage.setItem('dungeon', JSON.stringify(state));
            console.log(`Set dungeon state to ${state}`);
        },
        getDungeonState() { 
            if(localStorage.getItem('dungeon')) {
                return JSON.parse(localStorage.getItem('dungeon'));
            } else {
                console.log('No saved dungeon state');
            }
        }
    }
}