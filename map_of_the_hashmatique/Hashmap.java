import java.util.HashMap;
import java.util.Set;

public class Hashmap{
    public static void main(String[] args){
        HashMap<String, String> songsMap = new HashMap<String, String>();
        songsMap.put("Numb", "I've become so numb!");
        songsMap.put("Breaking the habit", "I'm breaking the habit... tonight.");
        songsMap.put("One step closer", "Cause I'm one step closer to the edge, I'm about to break");
        songsMap.put("Somewhere I belong", "Somewhere I belong");

        Set<String> songs = songsMap.keySet();
        for(String song: songs){
            String output = song + ": " + songsMap.get(song);
            System.out.println(output);
            System.out.println("----------------------------");
        }
    }
}