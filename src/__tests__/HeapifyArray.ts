import MinHeap from '@code/HeapifyArray'

test('heapify array', () => {
  const input = [70, 20, 100, 60, 15, 90]
  const out = [15, 20, 90, 60, 70, 100]

  const result = MinHeap.heapify(input)

  expect(result).toEqual(out)
})
