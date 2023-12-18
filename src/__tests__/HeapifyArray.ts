import minHeap from '@code/HeapifyArray'

test('heapify array', () => {
  const input = [70, 20, 100, 60, 15, 90]
  const out = [15, 20, 90, 60, 70, 100]

  minHeap(input)

  console.log(input)

  expect(input).toEqual(out)
})
