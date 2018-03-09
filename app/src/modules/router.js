import {
    homeRender
} from '../components/home-component/home-component.js';
import {
    dungeonRender
} from '../components/dungeon-component/dungeon-component.js';
import {
    shopRender
} from '../components/shop-component/shop-component.js';
import {
    characterRender
} from '../components/character-component/character-component.js';
import {
    inventoryRender
} from '../components/inventory-component/inventory-component.js';
import {
    setRoute,
    getRoute
} from './state.js';

// Get a reference to the "view-output" section.
const view = document.getElementById("view-output");

function getContent(route, callback){
    
    fetch(`./components/${route}-component/${route}-component.html`)
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      callback(text);
    });
}
    
function navigate(route){

    // Set the "view-output" div innerHTML based on the route.
    getContent(route, function (content) {
        view.innerHTML = content;
        eval(route + 'Render')();
    });
}

function routerInit() {

    const savedRoute = getRoute();
    navigate(savedRoute);

    document.querySelector('nav').addEventListener('click', (e) => {

        const route = e.target.hash.substr(1);
        // debugger;
        setRoute(route);
        navigate(route);
    });
}

export {
    routerInit,
    navigate
}