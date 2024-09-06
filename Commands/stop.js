const games = require('../games');

module.exports = {
    name: 'stop',
    description: 'Stop the current Blackjack game',
    execute(message, args) {
        const userId = message.author.id;
        const game = games[userId];  

        if (!game) {
            message.reply("You don't have an active game to stop.");
            return;
        }

        delete games[userId]; 
        message.reply("Your game has been stopped.");
    },
};