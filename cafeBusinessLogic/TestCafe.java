import java.util.ArrayList;
import java.util.Arrays;

public class TestCafe {
    public static void main(String[] args) {
        
        /* 
            You will need add 1 line to this file to create an instance 
            of the CafeUtil class. 
            Hint: it will need to correspond with the variable name used below..
        */
        CafeUtil cafeUtil = new CafeUtil();

        /* ============ App Test Cases ============= */

        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", cafeUtil.getStreakGoal(10));

        System.out.println("----- Order Total Test-----");
        ArrayList<Double> lineItems = new ArrayList<Double>();
        lineItems.add(3.5);
        lineItems.add(1.5);
        lineItems.add(4.0);
        lineItems.add(4.5);
        // {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: $%.2f \n\n",cafeUtil.getOrderTotal(lineItems));
        
        System.out.println("----- Display Menu Test-----");
        
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        cafeUtil.displayMenu(menu, lineItems);

        System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // --- Test 4 times ---
        for (int i = 0; i < 4; i++) {
            cafeUtil.addCustomer(customers);
            System.out.println("\n");
        }

        cafeUtil.printPriceChart("Columbian Coffee Grounds", 15.00, 3);
    }
}
