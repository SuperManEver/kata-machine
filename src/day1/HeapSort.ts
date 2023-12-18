import MinHeap from './MinHeap'

function heapSort(arr: number[]): number[] {
  /*
    1. create a heap for given array
    2. delete one by one until heap is empty
    3. resulted array will be sorted
  */

  const minHeap = new MinHeap()

  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i])
  }

  const result = []

  while (!minHeap.isEmpty) {
    result.push(minHeap.delete())
  }

  return result
}

function sort(arr: number[]): void {
  var len = arr.length

  /**
   * 1. convert array into heap
   * 2. delete all element from heap heapifying array on each deletion
   */

  // Build heap (rearrange array)
  const middle = Math.floor(len / 2) - 1

  /**
   *
   * going from the middle to top of the tree
   *
   */
  for (var i = middle; i >= 0; i--) {
    heapify(arr, len, i)
  }

  // One by one extract an element from heap
  for (var i = len - 1; i > 0; i--) {
    /**
     * in place sorting without creating new array
     */

    // Move current root to end
    var temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp // move largest to the

    // call max heapify on the reduced heap
    heapify(arr, i, 0)
  }
}

function leftChild(idx: number): number {
  return 2 * idx + 1
}

function rightChild(idx: number): number {
  return 2 * idx + 2
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr: number[], N: number, i: number) {
  var largest = i // Initialize largest as root
  var lChild = leftChild(i) // left = 2*i + 1
  var rChild = rightChild(i) // right = 2*i + 2

  // If left child is larger than root
  if (lChild < N && arr[lChild] > arr[largest]) {
    largest = lChild
  }

  // If right child is larger than largest so far
  if (rChild < N && arr[rChild] > arr[largest]) {
    largest = rChild
  }

  // If largest is not root
  if (largest !== i) {
    var swap = arr[i]
    arr[i] = arr[largest]
    arr[largest] = swap

    // Recursively heapify the affected sub-tree
    heapify(arr, N, largest)
  }
}

/* A utility function to print array of size n */

const arr = [12, 11, 13, 5, 6, 7]

sort(arr)

export default sort
