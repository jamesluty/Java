import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item("mocha", 4.00);
        Item item2 = new Item("latte", 4.50);
        Item item3 = new Item("drip coffee", 3.00);
        Item item4 = new Item("capuccino", 5.00);
    
        // Order variables -- order1, order2 etc.
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
        Order order5 = new Order();
        Order order6 = new Order();

        order1.addItem(item1);
        order1.addItem(item3);
        order2.addItem(item2);
        order2.addItem(item1);
        order3.addItem(item4);
        order4.addItem(item2);
        order4.addItem(item2);
        order4.addItem(item2);
        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("%s your total is $%.2f\n", order1.getName(), order1.getTotal());
        System.out.printf("Total: %s\n", order1.getTotal());
        System.out.printf("Ready: %s\n", order1.getReady());
        // System.out.printf("Items: %s\n", order1.getItems());
        // System.out.printf("Items: %s\n", order1.displayOrder());
        order1.displayOrder();
        // for(Item item: order1.getItems()){
        //     System.out.println(item.getName());
        // }
        order1.setReady();
        order2.setReady();
    }
}
