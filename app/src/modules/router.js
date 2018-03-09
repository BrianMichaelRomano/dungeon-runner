// Imports
import {
    // Home
    homeRender
} from '../components/home-component/home-component.js';

import {
    // Dungeon
    dungeonRender
} from '../components/dungeon-component/dungeon-component.js';

import {
    // Shop
    shopRender
} from '../components/shop-component/shop-component.js';

import {
    // Character
    characterRender
} from '../components/character-component/character-component.js';

import {
    // Inventory
    inventoryRender
} from '../components/inventory-component/inventory-component.js';

import {
    // State
    setRoute,
    getRoute
} from './state.js';

// Get content from seprate html files
function getContent(route, callback){
    // Use fetch api to request html templates
    fetch(`./components/${route}-component/${route}-component.html`)
    .then(function(response) {
        // Return template for use
        return response.text();
    })
    .then(function(text) {
        // Pass template to callback 
        callback(text);
    });
}

function navigate(route){

    // Get a reference to the "view-output" section.
    const view = document.getElementById("view-output");
    // Set the "view-output" div innerHTML based on the route.
    getContent(route, function (content) {
        // Set innerHTML
        view.innerHTML = content;
        // Call component render method
        eval(route + 'Render')();
    });
}

// Initialize router
function routerInit() {
    // Get last route saved to state
    const savedRoute = getRoute();
    // Navigate to route last saved to state
    navigate(savedRoute);

    // Add listener to navigation menu
    document.querySelector('nav').addEventListener('click', (e) => {
        // set route to navigte to from link href hash
        const route = e.target.hash.substr(1);
        // Save navigated route to state
        setRoute(route);
        // Navigate to route
        navigate(route);
    });
}

// Exports
export {
    routerInit,
    navigate
}