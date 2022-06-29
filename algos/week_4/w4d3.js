class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new item to the top of the stack (the head).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @param {any} val The val to add.
     * @returns {void}
     */
    push(val) {
        const newNode = new StackNode(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * Removes the top item (the head).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item of the stack.
     */
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;

        return removed.data;
    }

    /**
     * Returns the top item of the stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item.
     */
    peek() {
        return this.head ? this.head.data : null;
    }

    /**
     * Determines if the stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Gets the count of items in the stack.
     * - Time: O(n) linear, n = list length.
     * - Space: O(1).
     * @returns {number} The total number of items.
     */
    size() {
        let len = 0;
        let runner = this.head;

        while (runner) {
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    contains(val) {
        let runner = this.head;

        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class LinkedListQueue {
    /* 
      In order to maintain an O(1) enqueue time complexity like .push with an array
      We add a tail to our linked list so we can go directly to the last node
    */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(val) {
        const newTail = new QueueNode(val);

        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            this.tail = newTail;
        }
        // pre-increment so the new size is returned otherwise old size is returned
        return ++this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        // remove head
        if (!this.head) {
            return null;
        }

        const dequeued = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }

        this.size--;
        return dequeued.data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.head ? this.head.data : null;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    // =============================== W4D3 Algos

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Use the queue methods instead for practice.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) {
        let result = true
        if (this.size !== q2.size) {
            return false;
        }
        for (let i = 0; i < this.size; i++) {
            let tempQ1 = this.dequeue();
            let tempQ2 = q2.dequeue();
            this.enqueue(tempQ1);
            q2.enqueue(tempQ2);
            if (tempQ1 !== tempQ2) {
                result = false;
            }
        }
        return result;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * use the queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() {
        const stack = new LinkedListStack();
        let result = true;

        for (let i = 0; i < this.size; i++) {
            let node = this.head
            stack.push(node.data);
            this.dequeue();
            this.enqueue(node)
        }
        
        // let start = 0;
        // let end = this.size;
        let runner = stack.head;
        // while(start != end){
        while (runner) {
            let head = this.head;
            if (this.head.data.data !== runner.data) result = false;
            this.dequeue();
            this.enqueue(head);
            runner = runner.next;
            // start++;
        }
        return result;
    }
}

const queue1 = new LinkedListQueue();
queue1.enqueue(5);
queue1.enqueue(10);
queue1.enqueue(2);
queue1.enqueue(6);

const queue2 = new LinkedListQueue();
queue2.enqueue(5);
queue2.enqueue(10);
queue2.enqueue(2);
queue2.enqueue(6);

const queue3 = new LinkedListQueue();
queue3.enqueue(2);
queue3.enqueue(10);
queue3.enqueue(14);
queue3.enqueue(10);
queue3.enqueue(2);

console.log(queue3.isPalindrome());