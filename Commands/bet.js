const games = require('./../games'); // Ensure you're importing the 'games' object properly

module.exports = {
    name: 'bet',
    description: 'Place a bet in the game',
    execute(message, args) {
        const userId = message.author.id;
        const game = games[userId];  // Corrected 'games[userId]'

        if (!game) {
            message.reply("You need to start a game first with !play");
            return;
        }

        const betAmount = parseInt(args[0]);

        try {
            game.playerBet.placeBet(betAmount);
            message.reply(`Bet placed: ${betAmount}. Remaining balance: ${game.playerBet.getBalance()}`);
        } catch (err) {
            message.reply(err.message);
        }
    },
};
