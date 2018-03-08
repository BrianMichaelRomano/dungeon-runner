import {
    homeInit
} from './components/home-component/home-component.js';

const route = 'home';

// Get a reference to the "content" div.
const view = document.getElementById("view-output");

function getContent(route, callback){
    
    // Create a new AJAX request for fetching the partial HTML file.
    var request = new XMLHttpRequest();

    // Call the callback with the content loaded from the file.
    request.onload = function () {
    callback(request.responseText);
    };

    // Fetch the partial HTML file for the given fragment id.
    request.open("GET",`./components/${route}-component/${route}-component.html`);
    
    request.send(null);
}

    
function navigate(){
    
    // Set the "view-output" div innerHTML based on the route.
    getContent(route, function (content) {
        view.innerHTML = content;
        eval(route + 'Init')();
    });
    
}

navigate();