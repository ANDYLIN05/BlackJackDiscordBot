const games = require('../games');

module.exports = {
    name: 'hit',
    description: 'Hit to draw another card',
    execute(message, args) {
        const userId = message.author.id;
        const game = games[userId]; 

        if (!game) {
            message.reply("You need to start a game first with !play");
            return;
        }

        game.playerHand.addCard(game.deck.deal());
        const playerValue = game.playerHand.calculateValue();

        message.reply(`You drew: ${game.playerHand.toString()}. Your total value: ${playerValue}`);

        if (playerValue > 21) {
            message.reply("Busted! You lose.");
            game.playerBet.lostBet();
            delete games[userId];  
        }
    },
};