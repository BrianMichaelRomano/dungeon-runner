import {
    homeInit
} from '../components/home-component/home-component.js';
import {
    dungeonInit
} from '../components/dungeon-component/dungeon-component.js';
import {
    shopInit
} from '../components/shop-component/shop-component.js';
import {
    characterInit
} from '../components/character-component/character-component.js';
import {
    inventoryInit
} from '../components/inventory-component/inventory-component.js';

// Get a reference to the "view-output" section.
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

    
function navigate(route){

    // Set the "view-output" div innerHTML based on the route.
    getContent(route, function (content) {
        view.innerHTML = content;
        eval(route + 'Init')();
    });
}

function routerInit() {

    location.hash = '#home';
    navigate('home');

    document.querySelector('nav').addEventListener('click', (e) => {

        const route = e.target.hash.substr(1);

        navigate(route);
    });
}

export {
    routerInit,
    navigate
}