import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil{
    public int getStreakGoal(int numWeeks) {
        int[] streak = new int[numWeeks + 1];
        int sum = 0;

        for(int i=0; i<streak.length; i++){
            streak[i] = i;
        }

        for(int num: streak){
            sum += num;
        }

        return sum;
    }

    public double getOrderTotal(ArrayList<Double> prices){
        double total = 0;
        for(double price: prices){
            total += price;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices){
        for(int i=0; i<menuItems.size(); i++){
            System.out.printf("%s %s -- $%.2f%n", i, menuItems.get(i), prices.get(i));
            // System.out.println(i + " " + menuItems.get(i) + " -- $" + prices.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customer){
        System.out.println("Please enter customer name: ");
        String userName = System.console().readLine();
        customer.add(userName);
        System.out.println("Hello, " + userName+ ". There are " + (customer.size() - 1) + " people in front of you.");
        System.out.println(customer);
        // return userName;
    }

    public void printPriceChart(String product, double price, int maxQuantity){
        System.out.println(product);
        double sum = 0;
        for(int i=1; i<=maxQuantity; i++){
            sum = price*(i)-((i-1)*1.00);
            System.out.printf("%d - $%.2f%n", i, sum);
        }
    }
}