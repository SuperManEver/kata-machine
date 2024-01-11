import merge_sort, { merge } from '@code/MergeSort'

test('merge', function () {
  const arr1 = [1, 3, 5, 7]
  const arr2 = [2, 4, 6, 8]

  const result = merge(arr1, arr2)

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test('merge-sort', function () {
  const arr = [9, 3, 7, 4, 69, 420, 42]
  const result = merge_sort(arr)
  expect(result).toEqual([3, 4, 7, 9, 42, 69, 420])
})
