import heapSort from '@code/HeapSort'

test('heapify array', () => {
  const input = [70, 20, 100, 60, 15, 90]
  const out = [15, 20, 60, 70, 90, 100]

  const result = heapSort(input)

  expect(result).toEqual(out)
})
