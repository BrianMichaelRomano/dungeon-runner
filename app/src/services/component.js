export class Component {
    constructor() {}

    static render(config) {
    
        fetch(config.view)
        .then((res) => {
            return res.text()
        })
        .then((text) => {
            document.getElementById(config.element).innerHTML = text;
            config.callback();
        });
    }
}