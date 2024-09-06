class Hand{
    constructor(){
        this.hand = [];
    }
    addCard(card){
        this.hand.push(card);
    }
    calculateValue(){
        let sum = 0; 
        let aceCount = 0; 
        for(const card of this.hand){
            const cardValue = card.getValue();
            if(cardValue === "J" || cardValue === "Q" || cardValue === "K"){
                sum += 10;
            }
            else if(cardValue === "A"){
                sum += 11;
                aceCount += 1;
            }
            else{
                sum += parseInt(cardValue, 10);
            }
        }
        while(aceCount > 0 && sum > 21){
            sum -= 10;
            aceCount -= 1;
        }
        return sum;
    }

    calculateCardValue(card){
        const cardValue = card.getValue();
        if(cardValue === "J" || cardValue ===  "Q" || cardValue === "K"){
            return 10;
        }
        else if(cardValue === "A"){
            return 11;
        }
        else{
            return parseInt(cardValue, 10);
        }
    }

    getCard(){
       return this.hand
    }
    restHand(){
        this.hand = [];
    }
    toString(){
        this.hand.map(card => card.toString()).join(', ');
    }
}