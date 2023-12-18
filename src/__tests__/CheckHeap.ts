import checkHeap from '@code/CheckHeap'

test('check min heap', () => {
  const input = [15, 20, 90, 60, 70, 100]

  expect(checkHeap(input)).toBe(true)
})

test('check min heap', () => {
  const input = [15, 20, 90, 100, 60, 70]

  expect(checkHeap(input)).toBe(false)
})
