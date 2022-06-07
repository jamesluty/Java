import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        String outputGreeting = "Hello, " + name + ". Lovely to see you.";
        return outputGreeting;
        // return "Hello, " + name + ". Lovely to see you.";
    }
    
    public String dateAnnouncement() {
        Date todayDate = new Date();
        String outputDate = "It is currently " + todayDate;
        return outputDate;
    }

    public String alfredAngry(String comment){
        return "After all the things I've done for you, your going to say that to me. Aaahhhhhh. I'm never helping you again. I quit!";
    }
    
    public String respondBeforeAlexis(String conversation) {
        if(conversation.equals("Alexis! Play some low-fi beats.")){
            return "Playing your low-fi beats playlist";
        } else if (conversation.equals("I can't find my yo-yo. Maybe Alfred will know where it is.")){
            return "Your yo-yo is under your bed";
        } else if (conversation.equals("Maybe that's what Batman is about. Not winning. But failing..")){
            return "You got that right";
        }
        return "Sorry I didn't understand";
    }

	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

