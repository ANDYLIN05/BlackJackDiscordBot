import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class Deck {

    private List<Card> card = new ArrayList<>();;
    public String[] value = {"2","3","4","5","6","7","8","9","10","J","Q","K","A"};
    public String[] suit = {"Clubs","Diamonds","Hearts","Spades"};
    public Deck(){
        for(int i = 0; i < value.length; i++){
            for(int j = 0; j < suit.length; j++){
                card.add(new Card(value[i], suit[j]));
            }
        }
        shuffle();
    }

    public void shuffle(){
        Collections.shuffle(card);
    }
    
    public Card deal(){
        if(card.isEmpty()){
            throw new IllegalAccessError("Deck is empty");
        }
        return card.remove(card.size()-1);
    }

    public int size(){
        return card.size();
    }

    public void reset(){
        card.clear();
        for(int i = 0; i < value.length; i++){
            for(int j = 0; j < suit.length; j++){
                card.add(new Card(value[i], suit[j]));
            }
        } 
        shuffle();
    }
    public String toString(){
        return card.toString();
    }
}
