function leftChild(idx: number): number {
  return 2 * idx + 1
}

function rightChild(idx: number): number {
  return 2 * idx + 2
}

function isHeap(heap: number[], idx: number): boolean {
  const leftIdx = leftChild(idx)
  const rightIdx = rightChild(idx)

  if (!heap[leftIdx] && !heap[rightIdx]) {
    return true
  }

  if (!heap[leftIdx] || !heap[rightIdx]) {
    return false
  }

  if (heap[leftIdx] >= heap[idx] && heap[rightIdx] >= heap[idx]) {
    return isHeap(heap, leftIdx) && isHeap(heap, rightIdx)
  }

  return false
}

function checkHeapMinHeap(heap: number[]): boolean {
  /**
   * 1. It should be a complete tree (i.e. all levels except the last should be full).
   * 2. Every node’s value should be greater than or equal to its child node (considering max-heap).
   */

  /*
    solve recursively
    
    base case
      if leaf is reached
        true
      if no left child but right child exist
        false

      if there is a child smaller than root/parent
  */

  return isHeap(heap, 0)
}

export default checkHeapMinHeap
