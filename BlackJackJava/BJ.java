import java.util.Scanner;

public class BJ{
    private Deck deck = new Deck();
    private Hand playerHand = new Hand();
    private Hand dealerHand = new Hand();
    private Bet playerBet;
    
    public BJ(int amount){
        playerBet = new Bet(amount);
    }
    public void startGame(int betAmount){
        playerBet.placeBet(betAmount);
        deck.shuffle();
        playerHand.addCard(deck.deal());
        dealerHand.addCard(deck.deal());
        playerHand.addCard(deck.deal());
        dealerHand.addCard(deck.deal());
        displayResult(false);
    }

    public void playerHit(){
        playerHand.addCard(deck.deal());
        displayResult(false);
        if(playerHand.calculateValue() > 21){
            endGame("Busted");
            playerBet.loseBet();
        }
    }
    
    public void playerStand(){
        dealerTurn();
        displayResult(true);
        checkGameStatus();
    }

    private void dealerTurn(){ 
        while(dealerHand.calculateValue() < 17){
            dealerHand.addCard(deck.deal());
        }
    }

    private void checkGameStatus(){ 
        int playerValue = playerHand.calculateValue();
        int dealerValue = dealerHand.calculateValue();
        
        if(playerValue > 21){
            playerBet.loseBet();
            endGame("Busted");
        }
        else if(dealerValue > 21){
            playerBet.winBet();
            endGame("Win");
        }
        else if(playerValue == dealerValue){
            playerBet.tieBet();
            endGame("Tie");
        }
        else if(playerValue > dealerValue){
            playerBet.winBet();
            endGame("Win");
        }
        else{
            playerBet.loseBet();
            endGame("Lost");
        }
    }

    private void displayResult(boolean showDealerHand){
        System.out.println("Player's hand:");
        System.out.println(playerHand);
        System.out.println("Player's hand value: " + playerHand.calculateValue());

        System.out.println("Dealer's hand:");
        if (showDealerHand) {
            System.out.println(dealerHand);
            System.out.println("Dealer's hand value: " + dealerHand.calculateValue());
        } else {
            System.out.println(dealerHand.getCard().get(0));
            int singleValue = dealerHand.calculateCardValue(dealerHand.getCard().get(0));
            System.out.println("Dealer's visible card value: " + singleValue);
        }
    }

    private void endGame(String result){
        System.out.println(result);
        System.out.println("Your value: " + playerHand.calculateValue()); 
        System.out.println("Dealer value: " + dealerHand.calculateValue()); 
        System.out.println("Your Balance: " + playerBet.getBalance());        
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        BJ game = new BJ(1000); 

        while(true){
            System.out.println("Enter your bet: ");
            int betAmount = scanner.nextInt();
            game.startGame(betAmount);
            
            while(true){
                System.out.println("!Hit (1) or !Stand (2)");
                int action = scanner.nextInt();

                if(action == 1){
                    game.playerHit();
                    if(game.playerHand.calculateValue() > 21){
                        break;
                    }
                }
                else if(action == 2){
                    game.playerStand();
                    break;
                }
                else{
                    System.out.println("Invalid Entry");
                }
            }
            
            System.out.println("Go again? (yes/no)");
            String again = scanner.next();
            if(again.equalsIgnoreCase("no")){
                 break;
            } 
            game.playerHand.resetHand();
            game.dealerHand.resetHand();
            game.deck.reset();
            game = new BJ(game.playerBet.getBalance());  
        }
        scanner.close();
    }
}