function removeElement(nums: number[], val: number): number {
  let i = 0
  let len = nums.length
  let count = 0

  while (i < len) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      len = nums.length

      continue
    } else {
      count++
      i++
    }
  }

  return count
}

export default removeElement
