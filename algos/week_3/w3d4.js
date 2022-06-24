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
        return this.heap.length > 1 ? this.heap[1] : null;
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
        let currentInd = this.heap.length - 1;
        let parentInd = Math.floor(currentInd / 2);

        while (num < this.heap[parentInd]) {
            [this.heap[currentInd], this.heap[parentInd]] = [this.heap[parentInd], this.heap[currentInd]];
            currentInd = parentInd;
            parentInd = Math.floor(currentInd / 2);
        }
    }

    // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
    shiftUp() {
        let idxOfNodeToShiftUp = this.heap.length - 1;

        while (idxOfNodeToShiftUp > 1) {
            const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

            const isParentSmallerOrEqual =
                this.heap[idxOfParent] <= this.heap[idxOfNodeToShiftUp];

            // Parent is supposed to be smaller so ordering is complete.
            if (isParentSmallerOrEqual) {
                break;
            }

            this.swap(idxOfNodeToShiftUp, idxOfParent);
            // after swapping the node is at idxOfParent now.
            idxOfNodeToShiftUp = idxOfParent;
        }
    }

    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() {
        if (this.heap[1] == null) {
            return null;
        }
        let tempNode = this.heap[1];
        this.heap[1] = this.heap.pop();
        let poppedNode = this.heap[1];
        let nodeIndex = this.heap.indexOf(poppedNode);
        let childLeft = (nodeIndex * 2);
        let childRight = (nodeIndex * 2 + 1);
        while (poppedNode > this.heap[childLeft] || poppedNode > this.heap[childRight]) {
            if (this.heap[childLeft] > this.heap[childRight]) {
                [this.heap[nodeIndex], this.heap[childRight]] = [this.heap[childRight], this.heap[nodeIndex]];
                poppedNode = this.heap[childRight];
                nodeIndex = this.heap.indexOf(poppedNode);
            } else {
                [this.heap[nodeIndex], this.heap[childLeft]] = [this.heap[childLeft], this.heap[nodeIndex]];
                poppedNode = this.heap[childLeft];
                nodeIndex = this.heap.indexOf(poppedNode);
            }
        }
        return tempNode;
    }
}

let testHeap = new MinHeap();
testHeap.insert(8);
testHeap.insert(2);
testHeap.insert(3);
testHeap.insert(7);
testHeap.insert(6);
testHeap.insert(10);
testHeap.insert(1);
testHeap.insert(4);

testHeap.printHorizontalTree();

testHeap.extract();

testHeap.printHorizontalTree();