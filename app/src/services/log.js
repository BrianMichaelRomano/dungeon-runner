// Import State
import { State } from './state.js';
// Import Utils 
import { Utils as $ } from './utils.js';

export class Log {

    static logMessage(state, message) {

        const date = new Date();
        let timeStamp = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: `;
        let stampedMessage = timeStamp + message;
        state.log.push(stampedMessage);
        
        State.setState(state);

        let output = '';

        state.log.reverse().sort().forEach((logMessage) => {
            output += `<li>${logMessage}</li>`;
        });
        
        $.select('#log-list').innerHTML = output; 
    }
}