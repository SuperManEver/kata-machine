class Node<T> {
  public value: T
  public next?: Node<T>

  constructor(value: T) {
    this.value = value
  }
}

export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    this.length++

    const newNode = new Node(item)

    if (!this.head || !this.tail) {
      this.tail = this.head = newNode
      return
    }

    this.tail.next = newNode
    this.tail = newNode
  }

  deque(): T | undefined {
    if (!this.head) {
      return void 0
    }

    this.length--

    const temp = this.head
    this.head = this.head.next

    if (this.length === 0) {
      this.tail === void 0
    }

    return temp.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
