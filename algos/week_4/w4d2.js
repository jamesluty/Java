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
    enqueue(item) {
        if(this.isEmpty()){
            this.head = new QueueNode(item);
            this.tail = this.head;
            this.size++;
            return this.size;
        }

        this.tail.next = new QueueNode(item);

        this.tail = this.tail.next;

        this.size++;
        return this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }

        this.head = this.head.next;
        this.size--;
        return this.size;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if(this.isEmpty()){
            return null;
        }

        console.log(this.head);
        return this.head;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if(this.head == null){
            return true;
        } else {
            return false;
        }
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    length() {
        console.log(this.size);
        return this.size;
    }
}

const newList = new LinkedListQueue();
newList.enqueue(5);
newList.enqueue(7);
newList.enqueue(9);
newList.enqueue(2);
newList.length();
newList.dequeue();
newList.length();
newList.front();