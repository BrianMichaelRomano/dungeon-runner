class State {
    constructor() {
        this.newState = {
            character: {
                name: ''
            }
        };
    }

    createState() {
        return this.newState;
    }

    getState() {
        return JSON.parse(localStorage.getItem('DRstate'));
    }

    setState() {

    }
}

export let state = new State();