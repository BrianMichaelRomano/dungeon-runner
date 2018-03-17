class State {
    constructor() {
        this.newState = {
            character: null,
            dungeon: {
                view: 'entrance'
            }
        };
    }

    logState() {
        const state = this.getState();
        let stateEntries = Object.values(state);
        let objKeys = Object.keys(state);
        let counter = 0;
        for(let obj in stateEntries) {
            console.log(`Table below is for - ${objKeys[counter++].toUpperCase()}`);
            console.table(stateEntries[obj]);
        }
    }

    createState() {
        return this.newState;
    }

    clearState() {
        localStorage.removeItem('DRstate');
        location.reload();
    }

    getState() {
        return JSON.parse(localStorage.getItem('DRstate'));
    }

    setState(state) {
        localStorage.setItem('DRstate', JSON.stringify(state));
    }

    setDungeonView(view) {
        let state = this.getState();
        state.dungeon.view = view;
        this.setState(state);
    }
}

export let state = new State();