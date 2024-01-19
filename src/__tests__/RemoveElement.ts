import removeElement from '@code/RemoveElement'

test('[3,2,2,3]', () => {
  const arr = [3, 2, 2, 3]
  const val = 3

  const result = removeElement(arr, val)

  console.log('result: ', arr)

  expect(arr).toEqual([2, 2])
  expect(result).toEqual(2)
})

test('[0,1,2,2,3,0,4,2]', () => {
  const arr = [0, 1, 2, 2, 3, 0, 4, 2]
  const val = 2

  const result = removeElement(arr, val)

  console.log('result: ', arr)

  expect(arr).toEqual([0, 1, 3, 0, 4])
  expect(result).toEqual(5)
})
