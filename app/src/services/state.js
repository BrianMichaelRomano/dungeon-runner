class State {
    constructor() {
        this.newState = {
            character: {
                name: '',
                HP: 100,
                AP: 80,
                MP: 60,
                attack: 10,
                armor: 10,
            },
            dungeon: {
                view: 'entrance'
            }
        };
    }

    logState() {
        console.table(this.getState());
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