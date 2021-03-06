import java.util.Random;

public class BankAccount{
    private double checkingBalance;
    private double savingsBalance;
    private static int numOfAccounts = 0;
    private static double totalBalance = 0;
    private String accountNumber;

    public BankAccount(){
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        this.accountNumber = createAccountNumber();
        numOfAccounts++;
    }

    public BankAccount(int checking, int savings){
        this.checkingBalance = checking;
        this.savingsBalance = savings;
        this.accountNumber = createAccountNumber();
        numOfAccounts++;
    }

    public static int getNumOfAccounts() {
        return numOfAccounts;
    }

    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public void deposit(double amount, String account){
        if(account == "savings"){
            this.savingsBalance += amount;
            totalBalance += amount;
        } else if (account == "checking"){
            this.checkingBalance += amount;
            totalBalance += amount;
        }
    }

    public void withdrawl(double amount, String account){
        if(account == "savings"){
            if(this.savingsBalance >= amount){
                this.savingsBalance -= amount;
                totalBalance -= amount;
            } else {
                System.out.println("Insufficient funds!");
            }
        } else if (account == "checking"){
            if(this.checkingBalance >= amount){
                this.checkingBalance-= amount;
                totalBalance -= amount;
            } else {
                System.out.println("Insufficient funds!");
            }
        }
    }

    public double getTotalBalance(){
        return totalBalance;
    }

    private String createAccountNumber(){
        Random randInt = new Random();
        String accountNumber = "";
        for(int i=1; i<=10; i++){
            accountNumber += randInt.nextInt(10);
        }

        return accountNumber;
    }

    public String getAccountNumber() {
        return this.accountNumber;
    }
}