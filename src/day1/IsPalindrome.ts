function isPalindrome(str: string): boolean {
  const matchRegex = /\s+|[:.,!]/gi

  const input = str.replaceAll(matchRegex, '').toLowerCase()
  const len = input.length - 1
  const half = Math.floor(len / 2)

  for (let i = 0; i < half; i++) {
    const leftIdx = i
    const rightIdx = len - i
    const first = input[leftIdx]
    const last = input[rightIdx]

    if (first !== last) {
      return false
    }
  }

  return true
}

export default isPalindrome
