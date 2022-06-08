import java.util.Random;

public class TestBank{
    public static void main(String[] args){
        BankAccount myAccount = new BankAccount();

        myAccount.getSavingsBalance();
        System.out.println("Account number: " + myAccount.getAccountNumber() + "\n");
    }
}