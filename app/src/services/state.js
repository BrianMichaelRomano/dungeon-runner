export class State {

    static createState() {
        const newState = {
            character: null,
            dungeon: {
                view: 'entrance',
                turn: 0
            }
        };

        return newState;
    }
    
    static getState() {
        return JSON.parse(localStorage.getItem('DRstate'));
    }
    
    static setState(state) {
        localStorage.setItem('DRstate', JSON.stringify(state));
    }
    
    static setDungeonView(view) {
        let state = this.getState();
        state.dungeon.view = view;
        this.setState(state);
    }
    
    static setEnemyState(enemy) {
        let state = this.getState();
        state.enemy = enemy;
        this.setState(state);
    }
    
    static clearState() {
        localStorage.removeItem('DRstate');
        location.reload();
    }

    static logState() {
        const state = this.getState();
        let stateEntries = Object.values(state);
        let objKeys = Object.keys(state);
        let counter = 0;
        for(let obj in stateEntries) {
            console.log(`Table below is for - ${objKeys[counter++].toUpperCase()}`);
            console.table(stateEntries[obj]);
        }
    }
}