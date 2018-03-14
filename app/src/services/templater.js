export class Templater {
    
    static render (html) {
        return function(data) {
            for(let x in data) {
                let re = "{{\\s?" + x + "\\s?}}";
                html = html.replace(new RegExp(re, "ig"), data[x]);
            }
            return html;
        }
    }
}
