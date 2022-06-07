import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava{
    public ArrayList<Integer> getTenRolls(){
        Random randInt = new Random();
        ArrayList<Integer> outputArray = new ArrayList<>();
        for(int i=1; i<=10; i++){
            outputArray.add(randInt.nextInt(6) + 1);
        }

        return outputArray;
    }

    public char getRandomLetter(){
        char[] alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
        Random randChar = new Random();
        char outputChar = alphabet[randChar.nextInt(26)];
        return outputChar;
    }

    public String generatePassword(){
        String password = "";
        for(int i=1; i<=8; i++){
            password += getRandomLetter();
        }
        
        return password;
    }

    public ArrayList<String> getNewPasswordSet(int num){
        String password = "";
        ArrayList<String> passwordArray = new ArrayList<>();
        for(int x=0; x<num; x++){
            for(int i=1; i<=8; i++){
                password += getRandomLetter();
            }
            passwordArray.add(password);
            password = "";
        }
        
        
        return passwordArray;
    }

    public ArrayList<String> shuffleArray(ArrayList<String> inputArray, int num){
        Random randInt = new Random();
        ArrayList<String> outputArray = new ArrayList<>();
        outputArray = inputArray;
        for(int i=0; i<num; i++){
            int index1 = randInt.nextInt(inputArray.size());
            int index2 = randInt.nextInt(inputArray.size());
            String temp = outputArray.get(index1);
            outputArray.set(index1, outputArray.get(index2));
            outputArray.set(index2, temp);
        }

        return outputArray;
    }
}