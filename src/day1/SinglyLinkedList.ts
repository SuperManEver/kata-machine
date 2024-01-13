export default class SinglyLinkedList<T> {
  public length: number
  private head: Node<T> | null

  constructor() {
    this.length = 0
  }

  /**
   *
   * @param item
   *
   * adds new node at the beginning of a list
   */
  prepend(item: T): void {
    const newNode: Node<T> = {
      value: item,
      next: this.head,
    }

    this.head = newNode
    this.length++
  }

  indexOf(item: T) {
    let nodeIndex = 0
    let currentNode = this.head

    while (currentNode) {
      if (item === currentNode.value) {
        return nodeIndex
      }

      nodeIndex++
      currentNode = currentNode.next
    }

    return -1
  }

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
    const elementIndex = this.indexOf(item)
    return this.removeAt(elementIndex)
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

      return currentNode.value
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

  printList(): void {
    let current: Node<T> | null = this.head

    let result = ''

    while (current) {
      if (!current.next) {
        result += ` ${current.value}`
      } else {
        result += ` ${current.value} ->`
      }

      current = current.next
    }

    console.log(result)
  }

  removeDups() {
    const store = new Set<T>()

    let current = this.head
    let prev: Node<T> | null = null

    while (current) {
      if (store.has(current.value)) {
        if (prev) {
          prev.next = current.next
        }
      } else {
        store.add(current.value)
      }
      prev = current
      current = current.next
    }
  }

  lastKth(k: number): void {
    function traverse(node: Node<T>, k: number): any {
      if (!node.next) {
        return k - 1
      }

      const index = traverse(node.next, k)

      if (index === 0) {
        console.log('result: ', node.value)
        return
      }

      return index - 1
    }

    this.head && traverse(this.head, k)
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
