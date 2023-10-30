export default class SinglyLinkedList<T> {
  public length: number
  private head: Node<T> | null
  private tail: Node<T> | null

  constructor() {
    this.length = 0
  }

  prepend(item: T): void {}

  insertAt(item: T, idx: number): void {
    const isPositionInTheRange = idx > -1 && idx <= length

    if (!isPositionInTheRange) {
      return void 0
    }

    const newNode: Node<T> = {
      value: item,
      next: null,
    }

    let currentNode = this.head

    const isHeadPosition = idx === 0

    if (isHeadPosition) {
      // link new node to head
      newNode.next = currentNode

      this.head = newNode
    } else {
      let previousNode: Node<T> | null = null
      let index = 0

      while (index++ < idx) {
        if (currentNode) {
          previousNode = currentNode
          currentNode = currentNode?.next
        }

        index++
      }

      if (previousNode) {
        previousNode.next = newNode
        newNode.next = currentNode
      }

      this.length++
    }
  }

  append(item: T): void {
    const newNode = {
      value: item,
      next: null,
    }

    if (!this.head) {
      this.head = newNode
    } else {
      let currentNode = this.head

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = newNode
    }

    this.length++
  }

  remove(item: T): T | undefined {
    if (this.length === 0) {
      return void 0
    }

    let previousNode: Node<T> | null = null
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === item) {
        break
      }

      previousNode = currentNode
      currentNode = currentNode.next
    }

    if (previousNode && currentNode) {
      previousNode.next = currentNode.next

      this.length--

      return currentNode?.value
    }

    return void 0
  }

  get(idx: number): T | undefined {
    const isPositionInTheRange = idx > -1 && idx <= this.length

    if (!isPositionInTheRange || !this.head) {
      return void 0
    }

    let currentNode: Node<T> | null = this.head
    let index = 0

    while (index++ < idx) {
      if (currentNode) {
        currentNode = currentNode?.next
      }
    }

    return currentNode?.value
  }

  removeAt(idx: number): T | undefined {
    const isPositionInTheRange = idx > -1 && idx <= this.length

    if (!isPositionInTheRange || !this.head) {
      return void 0
    }

    let currentNode: Node<T> | null = this.head

    if (idx === 0) {
      this.head = currentNode.next
      this.length--
      return
    }

    let previousNode: Node<T> | null = null
    let index = 0

    while (index++ < idx) {
      if (currentNode) {
        previousNode = currentNode
        currentNode = currentNode?.next
      }

      index++
    }

    if (previousNode) {
      previousNode.next = currentNode ? currentNode.next : null
    }

    this.length--

    return currentNode ? currentNode.value : void 0
  }
}

class Node<T> {
  public value: T
  public next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
