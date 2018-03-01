module.exports = {
    clearState: function() {
        localStorage.removeItem('view');
        localStorage.removeItem('player');   
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
        }
    }
}