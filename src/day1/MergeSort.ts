export function merge(xs1: number[], xs2: number[]): number[] {
  let i = 0,
    j = 0

  let result = []

  while (i < xs1.length && j < xs2.length) {
    if (xs1[i] === xs2[j]) {
      result.push(xs1[i])
      i++
      j++
    }

    if (xs1[i] <= xs2[j]) {
      result.push(xs1[i])
      i++
    }

    if (xs1[i] > xs2[j]) {
      result.push(xs2[j])
      j++
    }
  }

  if (i >= xs1.length - 1 && j < xs2.length) {
    result = result.concat(xs2.slice(j))
  }

  if (j >= xs2.length - 1 && i < xs1.length) {
    result = result.concat(xs1.slice(i))
  }

  return result
}

function merge_sort(xs: number[]): number[] {
  if (xs.length <= 1) {
    return xs
  }

  const middle = Math.floor(xs.length / 2)

  const leftHalf = xs.slice(0, middle)
  const rightHalf = xs.slice(middle)

  return merge(merge_sort(leftHalf), merge_sort(rightHalf))
}

export default merge_sort
