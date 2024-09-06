const Deck = require('./deck');  
const Hand = require('./hand');   
const Bet = require('./bet');
const games = require('../games');


module.exports = {
    name: 'play',
    description: 'Start a new Blackjack game',
    execute(message, args) {
        const userId = message.author.id;

        if (games[userId]) {
            message.reply("You're already in a game!");
            return;
        }

        const deck = new Deck();
        const playerHand = new Hand();
        const dealerHand = new Hand();
        const playerBet = new Bet(1000); 

        deck.shuffle();
        playerHand.addCard(deck.deal());
        dealerHand.addCard(deck.deal());
        playerHand.addCard(deck.deal());
        dealerHand.addCard(deck.deal());

        games[userId] = { deck, playerHand, dealerHand, playerBet };

        message.reply(`Game started! Your cards: ${playerHand.toString()}, Dealer's visible card: ${dealerHand.getCard()[0].toString()}`);
    },
};