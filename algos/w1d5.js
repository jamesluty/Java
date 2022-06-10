// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if (!this.head) return null;
        let runner = this.head;
        let tempRunner;
        while (runner.next) {
            tempRunner = runner;
            runner = runner.next;
        }
        return tempRunner.data;
    }

    kthToLast(k) { // 3
        if (!this.head) return null;
        let runner = this.head;
        let tempRunner = runner;
        for (let i = 1; i < k; i++) {
            runner = runner.next;
        }
        while (runner.next) {
            tempRunner = tempRunner.next;
            runner = runner.next;
        }
        return tempRunner.data;
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeData(data) {
        if (!this.head) return null;
        let runner = this.head;
        let tempRunner;
        while (runner.next) {
            if (runner === data && !tempRunner) {
                runner = runner.next;
                this.head = runner;
                continue;
            } else if (runner === data) {
                runner = runner.next
                continue;
            } else {
                tempRunner = runner;
                runner = runner.next;
            }


            tempRunner.next = runner;
            // runner = runner.next;
        }
        return this;
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list. 
        // base: middle node
        // level2: node at the end
        // level3: node at the head
        // level4: multiple anywhere
    }

    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) {
        //Insert a new node before a node that has the given target value
    }

}


var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(5);
// list2.insertAtBack(6);
// list2.insertAtBack(7);
// list2.insertAtBack(5);
// list2.insertAtBack(5);
// list2.insertAtBack(8);
// list2.insertAtBack(9);
// list2.insertAtBack(10);
// list2.insertAtBack(11);
console.log(list2.secondToLast());
console.log(list2.kthToLast(5));
// console.log(list2.removeData(5));
//       HEAD
// list2: (1) --> (2) --> (3) --> null


// list1.printList();
list2.printList();

