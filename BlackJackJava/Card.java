public class Card {
    private String value;
    private String suit;

    public Card(String value, String suit){ 
        this.suit = suit;
        this.value = value;
    }
    
    public String getValue(){
        return value;
    }
    public String getSuit(){
        return suit;
    }
    public String toString(){
        return value + " of " + suit;
    }
}
