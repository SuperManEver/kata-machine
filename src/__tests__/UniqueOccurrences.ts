import uniqueOccurrences from '@code/UniqueOccurrences'

test('[1,2,2,1,1,3]', function () {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true)
})

test('[1,2]', function () {
  expect(uniqueOccurrences([1, 2])).toBe(false)
})

test('[-3,0,1,-3,1,1,1,-3,10,0]', function () {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true)
})
