import { loadNavListener } from './modules/view.js';
import { saveActiveViewModel } from './modules/model.js';

// Load Navigation listener
loadNavListener();

// View Selected
const viewSelected = function(activeView) {
    saveActiveViewModel(activeView);
}

export {
    viewSelected
}