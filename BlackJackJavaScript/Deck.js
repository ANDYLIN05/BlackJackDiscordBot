class Deck{
    constructor(){
        this.cards = [];
        this.value = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suit = ["Clubs","Diamonds","Hearts","Spades"];
        this.shuffle();
        this.deck();
    }

    deck(){ 
        this.cards = [];
        for(let value of this.value){
            for(let suit of this.suit){
                this.cards.push(new Card(value,suit));
            }
        }
    }

    shuffle(){
        for(let i = cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i],this.cards[j]] = [this.cards[j],this.cards[i]];
        }
    }

    deal(){
        if(this.cards.length == 0){
            throw new Error("Deck is Empty");
        }
        return this.cards.pop();
    }

    size(){
        return this.cards.length;
    }

    reset(){
        this.deck();
        this.shuffle();
    }

    toString(){
        return this.cards.map(card => card.toString()).join(', ');
    }
}