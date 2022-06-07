import java.util.ArrayList;

public class Order {
    private String name;
    private double total = 0;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<>();

    public Order(String name) {
        this.name = name;
        this.ready = false;
    }

    public String getName() {
        return this.name;
    }

    public double getTotal() {
        double total = 0;
        for(Item item: items){
            total += item.getPrice();
        }
        return total;
    }

    public boolean getReady() {
        return this.ready;
    }

    public void setReady() {
        this.ready = true;
        System.out.printf("%s, your order is ready.\n", this.name);
    }

    public ArrayList<Item> getItems() {
        return this.items;
    }

    public void addItem(Item item){
        this.items.add(item);
        this.total += item.getPrice();
    }

    public void displayOrder(){
        for(Item item: items){
            System.out.println(item.getName());
        }
    }
}