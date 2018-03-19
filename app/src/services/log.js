// Import State
import { State } from './state.js';
// Import Utils 
import { Utils as $ } from './utils.js';

export class Log {

    static logMessage(message) {

        const state = State.getState();        
        
        const date = new Date();
        let timeStamp = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: `;
        let stampedMessage = timeStamp + message;
        state.log.push(stampedMessage);
        if(state.log.length > 20) {
            state.log.shift();
        }
        State.setState(state);

        let output = '';

        state.log.sort().reverse().forEach((logMessage) => {
            output += `<li>${logMessage}</li>`;
        });
        
        $.select('#log-list').innerHTML = output; 
    }

    static loadLogs() {
        const state = State.getState();        
        
        let output = '';
        
        state.log.sort().reverse().forEach((logMessage) => {
            output += `<li>${logMessage}</li>`;
        });
        
        $.select('#log-list').innerHTML = output; 
    }
}