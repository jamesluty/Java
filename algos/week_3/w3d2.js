/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * WHERE 0th index is NOT USED:
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is locatedadsf at: i * 2 + 1
  * WHERE 0th index IS USED:
 * - parent is located at: Math.floor((i - 1) / 2);
 * - left child is located at: (i * 2) + 1
 * - right child is located at: (i * 2) + 2
 *
 * We will not use the 0th index for ease of math, but the logic is the same regardless
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap[1] || null;
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {

        this.heap.push(num);
        let child = this.heap.length - 1;
        let parent = Math.floor(child / 2)
        let temp = this.heap.length

        while (this.heap[parent] > num) {
            temp = this.heap[parent];
            this.heap[parent] = num;
            this.heap[child] = temp;
            child = parent;
            parent = Math.floor(child / 2)

        }
    }



}

const binaryHeap = new MinHeap();
binaryHeap.insert(5);
binaryHeap.insert(10);
binaryHeap.insert(8);
binaryHeap.insert(3);
binaryHeap.insert(6);
binaryHeap.printHorizontalTree();