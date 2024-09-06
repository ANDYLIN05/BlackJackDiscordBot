import java.util.ArrayList;
import java.util.List;

public class Hand {
    private List<Card> hand = new ArrayList<>();

    public void addCard(Card card){
        hand.add(card);
    }

    public int calculateValue(){
        int sum = 0; 
        int aceNumber = 0;
        for(Card card : hand){
            String cardValue = card.getValue();
            if(cardValue.equals("J") || cardValue.equals("Q")  || cardValue.equals("K")){
                sum = sum + 10;
            }
            else if(cardValue.equals("A")){
                sum = sum + 11;
                aceNumber = aceNumber + 1;
            }
            else{
                sum = sum + Integer.parseInt(cardValue);
            }
        }

        while(aceNumber > 0 && sum > 21){
            sum = sum - 10;
            aceNumber = aceNumber - 1;
        }
        return sum;
    }

    public int calculateCardValue(Card card){
        String cardValue = card.getValue();
        if(cardValue.equals("J")||cardValue.equals("Q")||cardValue.equals("K")){
            return 10;
        }
        else if(cardValue.equals("A")){
            return 11;
        }
        else{
            return Integer.parseInt(cardValue);
        }
    }

    public List<Card> getCard(){ 
        return hand;
    }
    
    public void resetHand(){
        hand.clear();
    }
    
    public String toString(){
        return hand.toString();
    }

}
