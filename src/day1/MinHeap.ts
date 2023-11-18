export class MinHeap2 {
  public length: number
  private data: number[]

  constructor() {
    this.data = []
    this.length = 0
  }

  insert(value: number): void {
    this.data[this.length] = value
    this.heapifyUp(this.length)
    this.length++
  }

  delete(): number {
    if (this.length === 0) {
      return -1
    }

    const out = this.data[0]
    this.length--

    if (this.length === 0) {
      this.data = []
      return out
    }

    this.data[0] = this.data[this.length]
    this.heapifyDown(0)

    return out
  }

  private heapifyDown(idx: number): void {
    if (idx >= this.length) {
      return
    }

    const lIdx = this.leftChild(idx)
    const rIdx = this.rightChild(idx)

    if (idx >= this.length || lIdx >= this.length) {
      return
    }

    const lValue = this.data[lIdx]
    const rValue = this.data[rIdx]
    const value = this.data[idx]

    if (lValue > rValue && value > rValue) {
      this.data[idx] = rValue
      this.data[rIdx] = rValue
      this.heapifyDown(rIdx)
    } else if (rValue > lValue && value > lValue) {
      this.data[idx] = lValue
      this.data[lIdx] = value
      this.heapifyDown(idx)
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return
    }

    const p = this.parent(idx)
    const parentV = this.data[p]
    const v = this.data[idx]

    if (parentV > v) {
      this.data[idx] = parentV
      this.data[p] = v
      this.heapifyUp(p)
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2
  }
}
