const games = require('../games');

module.exports = {
    name: 'stand',
    description: 'Stand and let the dealer play',
    execute(message, args) {
        const userId = message.author.id;
        const game = games[userId];  

        if (!game) {
            message.reply("You need to start a game first with !play");
            return;
        }

        while (game.dealerHand.calculateValue() < 17) {
            game.dealerHand.addCard(game.deck.deal());
        }

        const dealerValue = game.dealerHand.calculateValue();
        const playerValue = game.playerHand.calculateValue();

        message.reply(`Dealer's hand: ${game.dealerHand.toString()}. Dealer's total value: ${dealerValue}`);

        if (dealerValue > 21 || playerValue > dealerValue) {
            message.reply("You win!");
            game.playerBet.winBet();
        } else if (playerValue === dealerValue) {
            message.reply("It's a tie!");
            game.playerBet.tieBet();
        } else {
            message.reply("You lose!");
            game.playerBet.lostBet();
        }

        delete games[userId]; 
    },
};