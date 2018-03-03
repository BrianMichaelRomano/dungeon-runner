module.exports = {

    // Clears all states for dungeon runner saved in localStorage        
    clearState: function() {
        localStorage.removeItem('view');
        localStorage.removeItem('player');   
        localStorage.removeItem('skeleton');   
        localStorage.removeItem('dungeon');   
        console.log('State reset!')     
    },

    // Logs all states for dungeon runner saved in localStorage    
    logState: function() {
        console.log('Dungeon State: ', this.dungeon.getDungeonState());
        console.log('View State: ', this.view.getViewState());
        console.log('Player State: ', this.entity.getPlayerState());
        console.log('Skeleton State: ', this.entity.getSkeletonState());
    },

    // Methods controlling the view states
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

    // Methods controlling the entity states    
    entity: {
        // Creates new player state model and returns it
        createNewPlayer() {
            const newPlayer = {
                name: 'Firecore',
                HP: 100,
                AP: 80,
                MP: 60,
                ATT: 10
            }
            return newPlayer;
        },
        // Creates new skeleton state model and returns it        
        createNewSkeleton() {
            const newSkeleton = {
                name: 'Skeleton',
                HP: 80,
                AP: 60,
                MP: 40,
                ATT: 10
            }
            return newSkeleton;
        },
        // Checks for player state in localStorage,
        // if - no player state
        //     creates new player state and returns it
        // else 
        //     return existing player state 
        getPlayerState() {
            if(localStorage.getItem('player') === null) {
                return this.createNewPlayer();
            } else {
                return JSON.parse(localStorage.getItem('player'));
            }
        },
        // Accepts a player object and sets it to player state in local storage
        setPlayerState(player) {
            localStorage.setItem('player', JSON.stringify(player));
        },
                // Checks for skeleton state in localStorage,
        // if - no skeleton state
        //     creates new skeleton state and returns it
        // else 
        //     return existing skeleton state 
        getSkeletonState() {
            if(localStorage.getItem('skeleton') === null) {
                return this.createNewSkeleton();
            } else {
                return JSON.parse(localStorage.getItem('skeleton'));
            }
        },
        // Accepts a skeleton object and sets it to skeleton state in local storage        
        setSkeletonState(skeleton) {
            localStorage.setItem('skeleton', JSON.stringify(skeleton));
        }
    },

    // Methods controlling the dungeon state        
    dungeon: {
        // Accepts a string and sets it to dungeon state in local storage                
        setDungeonState(state) {
            localStorage.setItem('dungeon', JSON.stringify(state));
        },
        // Checks for dungeon state in localStorage,
        // if - dungeon state
        //     returns dungeon state
        // else 
        //     create new dungeon state object, save object to localstorage and return it 
        getDungeonState() { 
            if(localStorage.getItem('dungeon')) {
                return JSON.parse(localStorage.getItem('dungeon'));
            } else {
                const newState = {
                    turn: 0,
                    status: 'fresh'
                };
                localStorage.setItem('dungeon', JSON.stringify(newState));
    
                return newState;
            }
        }
    }
}