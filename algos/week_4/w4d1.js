// W4D1 ALGOS
// Create these methods for each of the Stack classes with O(1) time complexity:
//   - push (adds new item and returns new size)
//   - pop (returns removed item)
//   - isEmpty
//   - size
//   - peek (return top item without removing)
// Recreate the stack class using a singly linked list to store the items instead of an array

/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        let array = this.items;
        let length = array.length;
        array[length] = item;
        console.log(array);
        return array;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        let array = this.items;
        array.length--;
        console.log(array);
        return array;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        let array = this.items;
        let length = array.length - 1;
        console.log(array[length]);
        return array[length];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.items.length < 1) {
            console.log(true)
            return true;
        } else {
            console.log(false);
            return false;
        }
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        console.log(this.items.length);
        return this.items.length;
    }
}

// LINKED LIST IMPLEMENTATION
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(item) {
        let newNode = new StackNode(item)
        let currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        this.length++

        return this;
    }

    pop() {
        let poppedValue = this.head
        this.head = this.head.next
        this.length--;
        return poppedValue;
    }

    peek() {
        return this.head.data;
    }

    print(runner = this.head) {
        while (runner.next) {
            console.log(runner.data);
            runner = runner.next;
        }
        console.log(runner.data);
    }
}

const testArray = new Stack();
testArray.push(5);
testArray.push(7);
testArray.push(10);
testArray.pop();
testArray.peek();
testArray.isEmpty();
testArray.size();

const stackNode = new LinkedListStack();
// stackNode.push(5);
// stackNode.push(7);
// stackNode.push(10);
// stackNode.pop();
// stackNode.peek();
// stackNode.print();