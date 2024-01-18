export function shiftLeft(xs: any[], idx: number): void {
  for (let i = idx + 1; i < xs.length; i++) {
    xs[i - 1] = xs[i]
  }

  xs.pop()
}

function removeElement(nums: number[], val: number): number {
  let count = 0

  let len = nums.length
  let i = 0

  while (i < len) {
    if (nums[i] === val) {
      shiftLeft(nums, i)
      continue
    } else {
      count = count + 1
    }

    console.log('test: ', i, count, nums[i])

    i++
  }

  return count
}

export default removeElement
