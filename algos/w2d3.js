/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
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
        return this;
    }

    // -----------W1D3 -------------
    /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
    insertAtFront(data) {
        let newNode = new ListNode(data);

        newNode.next = this.head;
        this.head = newNode;
        return this;
        // instantiate the ListNode with data
        // pointer of the newNode to the original head
        // reassign the head

        // edge case: how do we handle an empty list

    }

    /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
    removeHead() {
        if(this.head == null){
            return null;
        } else {
            this.head = this.head.next;
        }
        return this;
    }

    average(){
        let sum = 0;
        let count = 0;
        let runner = this.head;
        while(runner.next !== null){
            sum += runner.data;
            runner = runner.next;
            count++;
        }
        sum += runner.data;
        count++
        return sum/count;
    }


    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) { // while(runner != null)
            console.log(runner.data);
            runner = runner.next;
        }
    }
}



var sll1 = new SLL(); // EMPTY LIST
// sll1.printList();


var sll2 = new SLL();
sll2.insertAtBack(5).insertAtBack(6).insertAtBack(7);
sll2.insertAtFront(8).insertAtFront(2);
// sll2.removeHead();
console.log("average", sll2.average());

// HEAD
// (5) -> (6) -> (7) -> NULL

sll2.printList();