// Load View Selectors
const viewEl = require('./viewSelectors');

// Export each view render function
module.exports = {
// Render Home 
    renderHome() {
        const view = `
            <h3>Home page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;
    },

// Render Dungeon
    renderDungeon() {
        const view = `
            <h3>Dungeon page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;
    },

// Render Character
    renderCharacter() {
        const view = `
            <h3>Character page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;
    },

// Render Shop
    renderShop() {
        const view = `
            <h3>Shop page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;
    },

// Render Inventory
    renderInventory() {
        const view = `
            <h3>Inventory page being rendered!</h3>
        `;

        viewEl.viewOutput.innerHTML = view;
    }
}