public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripPrice = 2.5;
        double lattePrice = 4.25;
        double cappuccinoPrice = 5.00;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "James";
        String customer3 = "Master Yoda";
        String customer4 = "Darth Vader";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if(isReadyOrder1){
            System.out.println(customer1 + readyMessage + ". " + displayTotalMessage + mochaPrice);
        } else {
            System.out.println(customer1 + pendingMessage);
        }

        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage + ". " + displayTotalMessage + cappuccinoPrice);
        } else {
            System.out.println(customer2 + pendingMessage);
        }

        if(isReadyOrder3){
            System.out.println(customer3 + readyMessage + ". " + displayTotalMessage + lattePrice*2);
        } else {
            System.out.println(customer3 + pendingMessage);
        }

        if(isReadyOrder4){
            System.out.println(customer4 + readyMessage + ". " + displayTotalMessage + mochaPrice);
        } else {
            System.out.println(customer4 + pendingMessage);
        }
        System.out.println(customer4 + ", we're sorry for the inconvenience. The difference is $" + lattePrice + " minus $" + mochaPrice + " that you already paid. You owe " + (lattePrice - mochaPrice) + " cents");
    }
}
