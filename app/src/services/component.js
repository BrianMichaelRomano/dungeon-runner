// Import Utils
import { TemplateEngine } from './templateEngine.js';

export class Component {
    constructor() {}

    static renderer(config) {
    
        fetch(config.view)
        .then((res) => {
            return res.text()
        })
        .then((text) => {
            let template = TemplateEngine.renderTemplate(text, config.data);
            document.getElementById(config.element).innerHTML = template;
            config.callback();
        });
    }
}