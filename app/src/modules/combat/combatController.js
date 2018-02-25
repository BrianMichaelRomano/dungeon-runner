const StatsController = require('../stats/statsController');
const ViewController = require('../view/viewController');

const stats = new StatsController();
const view = new ViewController();

module.exports = {
    combatLoop(player, enemy) {
        console.log('Entites fighting...');
        const playerStats = stats.getCalculatedStats(player);
        const enemyStats = stats.getCalculatedStats(enemy);

        view.renderEntityCards(player, enemy);
        
        console.log(playerStats);
        console.log(enemyStats);
    }
}