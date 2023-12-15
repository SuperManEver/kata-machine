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

export default heapSort
