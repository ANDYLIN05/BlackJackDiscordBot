class Bet{
    constructor(initialBalance){
        this.playerBalance = initialBalance;
        this.currentAmount = 0;
    }

    placeBet(amount){
        if(amount > this.playerBalance){
            throw new Error("No money");
        }
        this.currentAmount = amount;
        this.playerBalance -= amount;
    }

    winBet(){
        this.playerBalance += (2 * this.currentAmount);
        this.currentAmount = 0;
    }

    lostBet(){
        this.currentAmount = 0;
    }
    
    tieBet(){
        this.playerBalance += this.currentAmount;
        this.currentAmount = 0;
    }

    getBalance(){
        return this.playerBalance;
    }

    getCurrentAmount(){
        return this.currentAmount;
    }

}