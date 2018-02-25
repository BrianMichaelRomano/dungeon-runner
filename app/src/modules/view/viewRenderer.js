const viewEl = require('./viewSelectors');

module.exports = {
// Render Home 
    renderHome() {
        const view = `
            <h3>Home page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;

        console.log('Rendering home page!');
    },

// Render Dungeon
    renderDungeon() {
        const view = `
            <h3>Dungeon page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;

        console.log('Rendering Dungeon page!');
    },

// Render Character
    renderCharacter() {
        const view = `
            <h3>Character page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;

        console.log('Rendering Character page!');
    },

// Render Shop
    renderShop() {
        const view = `
            <h3>Shop page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;

        console.log('Rendering Shop page!');
    },

// Render Inventory
    renderInventory() {
        const view = `
            <h3>Inventory page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;

        console.log('Rendering Inventory page!');
    }
}