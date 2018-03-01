module.exports = {
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
                MP: 60
            }
            return player;
        },
        getNewSkeleton() {
            const skeleton = {
                name: 'Skeleton',
                HP: 80,
                AP: 60,
                MP: 40
            }
            return skeleton;
        }
    }
}