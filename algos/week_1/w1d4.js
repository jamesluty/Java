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
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(data) {
        let runner = this.head;
        while(runner){
            if(runner.data == data) return true;
            runner = runner.next;
        }
        return false;
    }

    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        if(!this.head) return null;
        let runner = this.head;
        let temp;
        while(runner.next){
            temp = runner;
            runner = runner.next;
        }
        temp.next = null;
        return runner.data;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if(!current) return false;

        if(current.data == val) return true;
        return this.containsRecursive(val, current.next);
    }

    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if(this.head === null) return null;

        if(runner === null) return maxNode.data;

        if(runner.date > maxNode.data){
            maxNode = runner;
        }

        return this.recursiveMax(runner.next, maxNode);
    }

}

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);

list2.printList();

console.log(list2.containsRecursive(5));
console.log(list2.containsRecursive(3));
console.log(list2.containsRecursive(1000));

list2.removeBack();
list2.printList();