type Node<T> = {
  value: T
  prev?: Node<T>
  next?: Node<T>
}

export default class DoublyLinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>

    this.length++

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node

    this.head = node
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error('oh no')
    }

    if (idx === this.length) {
      this.append(item)
      return
    } else if (idx === 0) {
      this.prepend(item)
      return
    }

    this.length++
    let curr = this.head

    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next
    }

    curr = curr as Node<T>
    const node = { value: item } as Node<T>

    node.next = curr
    node.prev = curr.prev
    curr.prev = node

    if (node.prev) {
      node.prev.next = curr
    }
  }

  append(item: T): void {
    this.length++

    const node = { value: item } as Node<T>

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node

    this.tail = node
  }

  remove(item: T): T | undefined {
    const curr = this.getByValye(item)

    if (!curr) {
      return void 0
    }

    // At that point we know we found an item to delete

    this.length--

    if (this.length === 0) {
      const out = this.head?.value
      this.head = this.tail = undefined
      return out
    }

    if (curr.prev) {
      curr.prev.next = curr.next
    }

    if (curr.next) {
      curr.next.prev = curr.prev
    }

    if (curr === this.head) {
      this.head = curr.next
    }

    if (curr === this.tail) {
      this.tail = curr.prev
    }

    curr.prev = curr.next = undefined
    return curr.value
  }

  get(idx: number): T | undefined {
    const node = this.getAt(idx)

    return node?.value
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)

    if (node) {
      return this.remove(node.value)
    }

    return void 0
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head

    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next
    }

    return curr
  }

  private getByValye(value: T): Node<T> | undefined {
    let curr = this.head

    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === value) {
        break
      }

      curr = curr.next
    }

    return curr
  }
}
