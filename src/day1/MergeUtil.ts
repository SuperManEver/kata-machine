// function merge(nums1: number[], n: number, nums2: number[], m: number): void {
//   let i = 0
//   let j = 0

//   while (i < n && j < m) {
//     if (nums1[i] <= nums2[j]) {
//       i++
//     }

//     if (nums1[i] > nums2[j]) {
//       // swap
//       const temp = nums1[i]
//       nums1[i] = nums2[j]
//       nums2[j] = temp
//       nums2.sort()

//       i++
//     }
//   }

//   if (i >= n && j < m) {
//     while (j < m) {
//       nums1[i] = nums2[j]

//       i++
//       j++
//     }
//   }
// }

function merge(nums1: number[], n: number, nums2: number[], m: number): void {
  const result = new Array()

  let i = 0
  let j = 0

  while (i < n && j < m) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      result.push(nums2[j])

      i++
      j++
    }

    if (nums1[i] < nums2[j]) {
      result.push(nums1[i])
      i++
    }

    if (nums1[i] > nums2[j]) {
      // swap
      //       const temp = nums1[i]
      //       nums1[i] = nums2[j]
      //       nums2[j] = temp

      result.push(nums2[j])
      j++
    }
  }

  if (i >= n && j < m) {
    while (j < m) {
      result.push(nums2[j])

      j++
    }
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i]
  }
}

function main() {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const nums2 = [2, 5, 6]

  merge(nums1, 3, nums2, 3)

  // console.log('result: ', nums1)
}

// main()

export default merge
