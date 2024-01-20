function removeElemStartAt(nums: number[], val: number, idx: number): void {
  let i = idx
  let len = nums.length

  while (i < len) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      len = nums.length

      continue
    } else {
      i++
    }
  }
}

function removeDuplicates(nums: number[]): number {
  let len = nums.length
  let i = 0

  while (i < len) {
    if (i + 1 >= len) {
      break
    }

    removeElemStartAt(nums, nums[i], i + 1)
    len = nums.length

    i++
  }

  return nums.length
}

export default removeDuplicates
