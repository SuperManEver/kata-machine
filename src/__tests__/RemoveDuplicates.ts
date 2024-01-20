import removeDuplicates from '@code/RemoveDuplicates'

test('[1,1,2]', () => {
  const input = [1, 1, 2]

  const result = removeDuplicates(input)

  expect(result).toEqual(2)
  expect(input).toEqual([1, 2])
})

test('[0,0,1,1,1,2,2,3,3,4]', () => {
  const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

  const result = removeDuplicates(input)

  expect(result).toEqual(5)
  expect(input).toEqual([0, 1, 2, 3, 4])
})
