class BJ{
    constructor(amount){
        this.deck = new this.deck();
        this.playerHand = new Hand();
        this.dealerHand = new Hand();
        this.playerBet = new this.playerBet(amount);
    }
    startGame(betAmount){
        this.playerBet.placeBet(betAmount);
        this.deck.shuffle();
        this.playerHand.addCard(this.deck.deal());
        this.dealerHand.addCard(this.deck.deal());
        this.playerHand.addCard(this.deck.deal());
        this.dealerHand.addCard(this.deck.deal());
        this.displayResult(false);
    }
    playerHit(){
        this.playerHand.addCard(this.deck.deal());
        this.displayResult(false);
        if(this.playerHand.calculateValue() > 21){
            this.endGame("Busted");
            this.playerBet.lostBet();
        }
    }
    playerStand(){
        this.dealerTurn();
        this.displayResult(true);
        this.checkGameStatus();
    }
    dealerTurn(){
        while(this.dealerHand.calculateValue() < 17){
            this.dealerHand.addCard(this.deck.deal());
        }
    }
    checkGameStatus(){
        const playerValue = this.playerHand.calculateValue();
        const dealerValue = this.dealerHand.calculateValue();

        if(playerValue > 21){
            this.playerBet.lostBet();
            this.endGame("Busted");
        }
        else if(dealerValue > 21){
            this.playerBet.winBet();
            this.endGame("Win");
        }
        else if(playerValue == dealerValue){
            this.playerBet.tieBet();
            this.endGame("Tie");
        }
        else if(playerValue > dealerValue){
            this.playerBet.winBet();
            this.endGame("Win");
        }
        else{
            this.playerBet.lostBet();
            this.endGame("Lost");
        }
    }
    displayResult(showDealerHand){
        console.log("Player's hand:");
        console.log(this.playerHand.toString());
        console.log("Player's hand value: " + this.playerHand.calculateValue());

        console.log("Dealer's hand:");
        if(showDealerHand){
            console.log(this.dealerHand.toString());
            console.log("Dealer's hand value: "+ this.dealerHand.calculateValue());
        }
        else{
            console.log(this.dealerHand.getCard()[0].toString());
            const singleValue = this.dealerHand.calculateCardValue(this.dealerHand.getCardA()[0]);
            console.log("Dealer's visible card value: " + singleValue);
        }
    }
    endGame(result){
        console.log(result);
        console.log("Your value: " + this.playerHand.calculateValue());
        console.log("Dealer value: " + this.dealerHand.calculateValue());
        console.log("Your Balance: " + this.playerBet.getBalance());
    }
}
