const actionButtonsView = require('./actionButtonsView');
const _ = require('../../../libraries/helperFunctions');

module.exports = {
    renderMenu: function(e) {
        const buttonPressed = e.target.id;

        switch (buttonPressed) {
            case 'attack-btn':
                _.element('#action-menu').innerHTML = actionButtonsView.attackView();
                _.element('#basic-attack-btn').addEventListener('click', () => {
                    console.log('Basic Attack....');
                });
                console.log('Attack Menu');
                break;

                case 'defend-btn':
                _.element('#action-menu').innerHTML = actionButtonsView.defendView();                
                console.log('Defend Menu');
                break;

                case 'magic-btn':
                _.element('#action-menu').innerHTML = actionButtonsView.magicView();                
                console.log('Magic Menu');
                break;

                case 'item-btn':
                _.element('#action-menu').innerHTML = actionButtonsView.itemView();                
                console.log('Item Menu');
                break;

                case 'flee-btn':
                _.element('#action-menu').innerHTML = actionButtonsView.fleeView();                
                console.log('Flee Menu');
                break;
        }
    }
}