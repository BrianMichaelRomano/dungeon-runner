// Import Utils
import { Templater } from './templater.js';

export class Component {
    constructor() {}

    static renderer(config) {
    
        fetch(config.view)
        .then((res) => {
            return res.text()
        })
        .then((text) => {
            let template = Templater.render(text);
            document.getElementById(config.element).innerHTML = template(config.data);
            config.callback();
        });
    }
}