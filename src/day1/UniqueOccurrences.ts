function uniqueOccurrences(arr: number[]): boolean {
  const frequencies = new Map()

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]

    if (frequencies.has(current)) {
      frequencies.set(current, frequencies.get(current) + 1)
    } else {
      frequencies.set(current, 1)
    }
  }

  const set = new Set()

  for (let [_, value] of frequencies) {
    set.add(value)
  }

  return frequencies.size === set.size
}

export default uniqueOccurrences
