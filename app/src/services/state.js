class State {
    constructor() {
        this.newState = {
            character: {
                name: ''
            },
            dungeon: {
                view: 'exit'
            }
        };
    }

    createState() {
        return this.newState;
    }

    getState() {
        return JSON.parse(localStorage.getItem('DRstate'));
    }

    setState(state) {
        localStorage.setItem('DRstate', JSON.stringify(state));
    }
}

export let state = new State();