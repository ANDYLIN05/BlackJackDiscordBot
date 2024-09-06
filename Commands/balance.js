const games = require('../games');


module.exports = {
    name: 'balance',
    description: 'Check your balance',
    execute(message, args) {
        const userId = message.author.id;
        const game = games[userId];  // Corrected 'games[userId]'

        if (!game) {
            message.reply("You need to start a game first with !play");
            return;
        }

        message.reply(`Your balance: ${game.playerBet.getBalance()}`);
    },
};