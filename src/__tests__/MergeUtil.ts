import merge from '@code/MergeUtil'

test('merge', function () {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const nums2 = [2, 5, 6]

  merge(nums1, 3, nums2, 3)

  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})

test.only('merge', function () {
  const nums1 = [4, 5, 6, 0, 0, 0]
  const nums2 = [1, 2, 3]

  merge(nums1, 3, nums2, 3)

  console.log('result: ', nums1)

  expect(nums1).toEqual([1, 2, 3, 4, 5, 6])
})

test('merge', function () {
  const nums1 = [
    -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5,
    -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4,
    5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]
  const nums2 = [
    -10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7,
    -7, -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2,
    -2, -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2,
    2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6,
    7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
  ]

  merge(nums1, 55, nums2, 99)

  expect(nums1).toEqual([
    -10, -10, -10, -10, -9, -9, -9, -9, -9, -9, -9, -8, -8, -8, -8, -8, -8, -8,
    -7, -7, -7, -7, -7, -7, -7, -7, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -6,
    -6, -6, -6, -5, -5, -5, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -4, -4, -4,
    -3, -3, -3, -3, -3, -2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3,
    3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9,
    9, 9, 9, 9,
  ])
})
