/**
 * Class to represent a Node for a DoublyLinkedList.
 */
 class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        const newHead = new DLLNode(data);

        if (this.isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            const oldHead = this.head;
            oldHead.prev = newHead;
            newHead.next = oldHead;
            this.head = newHead;
        }
        return this;
    }

    insertAtFront2(data) {
        const newHead = new DLLNode(data);

        if (this.isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
            return this;
        }

        this.head.prev = newHead;
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(1) constant. No loop is needed since we have direct access to
     *    the tail.
     * - Space: O(1) constant.
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        const newTail = new DLLNode(data);

        if (this.isEmpty()) {
            // if no head set the newTail to be both the head and the tail
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this;
    }

    /**
     * Removes the middle node in this list.
     * - Time: O(0.5n) -> O(n) linear, n = list length.
     *    Since it's not constant we simplify it to O(n). Without the early
     *    exists, it would not be 0.5n.
     * - Space: O(1) constant.
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        // when there is only 1 node, it is the middle, remove it.
        if (!this.isEmpty() && this.head === this.tail) {
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }

        let forwardRunner = this.head;
        let backwardsRunner = this.tail;

        while (forwardRunner && backwardsRunner) {
            if (forwardRunner === backwardsRunner) {
                const midNode = forwardRunner;
                midNode.prev.next = midNode.next;
                midNode.next.prev = midNode.prev;
                return midNode.data;
            }

            // runners passed each other without stopping on the same node, even length, we can exit early
            if (forwardRunner.prev === backwardsRunner) {
                return null;
            }

            forwardRunner = forwardRunner.next;
            backwardsRunner = backwardsRunner.prev;
        }
        return null;
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(n) linear, n = list length. targetVal could be at opposite of
     *    starting side.
     * - Space: O(1) constant.
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
        if (this.isEmpty()) {
            return false;
        }

        let runner = this.head;

        // runner && is in case runner becomes null so we don't check null.data
        while (runner && runner.data !== targetVal) {
            runner = runner.next;
        }

        if (runner === null) {
            return false;
        }

        const newNode = new DLLNode(newVal);
        newNode.prev = runner;
        newNode.next = runner.next;

        if (runner === this.tail) {
            this.tail = newNode;
        } else {
            // if runner was tail then next would be null.
            runner.next.prev = newNode;
        }

        runner.next = newNode;
        return true;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(n) linear, n = list length. targetVal could be at opposite of
     *    starting side.
     * - Space: O(1) constant.
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        if (this.isEmpty()) {
            return false;
        }

        let runner = this.head;

        // This was written with a different structure than insertAfter to
        // for comparison purposes but the logic is almost the same.
        while (runner) {
            if (runner.data === targetVal) {
                const newNode = new DLLNode(newVal);
                newNode.next = runner;
                newNode.prev = runner.prev;

                if (runner === this.head) {
                    this.head = newNode;
                } else {
                    // if runner was head then prev would be null.
                    runner.prev.next = newNode;
                }

                runner.prev = newNode;
                return true;
            }

            runner = runner.next;
        }
        return false;
    }

    // ======================================= W4D5 Algos
    /**
     * Retrieves the data from the nthLast node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} nthLast Indicates the position from the back of the list.
     * @returns {any}
     */
    nthToLast(nthLast) {
        if (!this.head) return null;
        let runner = this.tail;
        for (let i = 0; i < nthLast - 1; i++) {
            if (runner.prev) {
                runner = runner.prev;
            } else {
                runner = this.tail;
            }
        }
        return runner.data;
    }

    /**
     * Determines if the node's data of this list forms a palindrome.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this list is a palindrome.
     */
    isPalindrome() {
        if (!this.head) return false;
        let front = this.head;
        let back = this.tail;
        while (front != back && front.next !== back) {
            if (front.data === back.data) {
                front = front.next;
                back = back.prev;
            } else {
                return false;
            }
        }
        return true;
    }

    /**
     * Determines if a given node in this list is in the left half of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node
     * @returns {boolean}
     */
    isNodeInLeftHalf(node) {
        if (!this.head) return false;
        let front = this.head;
        let back = this.tail;
        while (front !== back && front.next !== back) {
            if (front.data === node) {
                return true;
            }
            front = front.next;
            back = back.prev;
        }
        return false;
    }
}


const emptyList = new DoublyLinkedList();
const singleNodeList = new DoublyLinkedList().insertAtFront(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);
const testList = new DoublyLinkedList().insertAtBackMany([5, 8, 9, 8, 5]);
const testList2 = new DoublyLinkedList().insertAtBackMany([5, 7, 9, 8, 4]);

  // console.log(unorderedList.nthToLast(4));
  // console.log(unorderedList.nthToLast(10));
  // console.log(unorderedList.isPalindrome());
  // console.log(testList.isPalindrome());
  // console.log(unorderedList.isNodeInLeftHalf(4));
  // console.log(unorderedList.isNodeInLeftHalf(-7));
  // console.log(testList.isNodeInLeftHalf(9));