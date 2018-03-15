export class Utils {
    constructor() {}

    static event(selector, event, callback) {
        document.querySelector(selector).addEventListener(event, callback);
    }
}