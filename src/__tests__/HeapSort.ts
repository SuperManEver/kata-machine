import heapSort from '@code/HeapSort'

test('heapify array', () => {
  const input = [12, 11, 13, 5, 6, 7]

  heapSort(input)

  expect(input).toEqual([5, 6, 7, 11, 12, 13])
})
