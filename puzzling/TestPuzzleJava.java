import java.util.ArrayList;
import java.util.Random;

public class TestPuzzleJava {
    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println("---- Get ten random rolls ----");
        System.out.println(randomRolls);
        System.out.println(" ");

        //..
        // Write your other test cases here.
        //..
        System.out.println("---- Get a random letter from alphabet ----");
        System.out.println(generator.getRandomLetter());
        System.out.println(" ");

        System.out.println("---- Generate random password ----");
        System.out.println(generator.generatePassword());
        System.out.println(" ");

        System.out.println("---- Generate array of random passwords ----");
        ArrayList<String> passwordSet = generator.getNewPasswordSet(10);
        System.out.println(passwordSet);
        System.out.println(" ");

        System.out.println("---- Shuffle array indexes ----");
        System.out.println(generator.shuffleArray(passwordSet, 10));
        System.out.println(" ");
    }
}
