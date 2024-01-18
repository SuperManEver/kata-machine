function merge(nums1: number[], n: number, nums2: number[], m: number): void {
  let result = new Array()

  let i = 0
  let j = 0

  while (i < n && j < m) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      result.push(nums2[j])

      i++
      j++
      continue
    }

    if (nums1[i] < nums2[j]) {
      result.push(nums1[i])
      i++
    }

    if (nums1[i] > nums2[j]) {
      result.push(nums2[j])
      j++
    }
  }

  if (i >= n && j < m) {
    result = result.concat(nums2.slice(j))
  }

  if (j >= m && i < n) {
    while (i < n) {
      result.push(nums1[i])

      i++
    }
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i]
  }
}

export default merge
