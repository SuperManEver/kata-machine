function insertion_sort(xs: number[]) {
  for (let i = 2; i <= xs.length; i++) {
    let j = i - 1
    const key = xs[j]

    while (j >= 0) {
      if (xs[j - 1] >= key) {
        xs[j] = xs[j - 1]
        xs[j - 1] = key
      }

      j = j - 1
    }
  }
}

export default insertion_sort
