public class Bet {
    private int playerBalance = 0;
    private int currentAmount = 0;

    public Bet(int initialBalance){
        this.playerBalance= initialBalance;
        this.currentAmount = 0;
    }

    public void placeBet(int amount){
        if(amount > playerBalance){
            throw new IllegalAccessError("No money");
        }
        currentAmount = amount;
        playerBalance = playerBalance - amount;
    }

    public void winBet(){
        playerBalance = playerBalance + (2 * currentAmount);
        currentAmount = 0;
    }

    public void loseBet(){
        currentAmount = 0;
    } 

    public void tieBet(){
        playerBalance = playerBalance + currentAmount;
        currentAmount = 0;
    }

    public int getBalance(){
        return this.playerBalance;
    }

    public int getCurrentAmount(){
        return this.currentAmount;
    }

}
