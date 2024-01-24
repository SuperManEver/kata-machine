class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  root: TreeNode | null

  constructor() {
    this.root = null
  }

  insert(value: number): void {
    const newNode = new TreeNode(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    this.insertNode(this.root, newNode)
  }

  private insertNode(root: TreeNode, newNode: TreeNode): void {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  search(value: number): boolean {
    return this.searchNode(this.root, value)
  }

  private searchNode(root: TreeNode | null, value: number): boolean {
    if (!root) {
      return false
    }

    if (value < root.value) {
      return this.searchNode(root.left, value)
    } else if (value > root.value) {
      return this.searchNode(root.right, value)
    } else {
      // mean they are equal
      return true
    }
  }

  inOrderTraversal(): number[] {
    const result: number[] = []
    this.inOrderTraversalNode(this.root, result)
    return result
  }

  private inOrderTraversalNode(root: TreeNode | null, result: number[]): void {
    if (root !== null) {
      this.inOrderTraversalNode(root.left, result)

      console.log(root.value)

      result.push(root.value)
      this.inOrderTraversalNode(root.right, result)
    }
  }

  preOrderTraversal(): number[] {
    const result: number[] = []

    this.preOrderTraversalNode(this.root, result)
    return result
  }

  private preOrderTraversalNode(root: TreeNode | null, result: number[]): void {
    if (root !== null) {
      result.push(root.value)

      this.inOrderTraversalNode(root.left, result)
      this.inOrderTraversalNode(root.right, result)
    }
  }

  postOrderTraversal(): number[] {
    const result: number[] = []

    this.postOrderTraversalNode(this.root, result)
    return result
  }

  private postOrderTraversalNode(
    root: TreeNode | null,
    result: number[]
  ): void {
    if (root !== null) {
      this.inOrderTraversalNode(root.left, result)
      this.inOrderTraversalNode(root.right, result)
      result.push(root.value)
    }
  }

  findMinimumValue(): number | null {
    return this.findMinimumValueNode(this.root)
  }

  private findMinimumValueNode(node: TreeNode | null): number | null {
    if (!node) {
      return null
    }

    if (!node.left) {
      return node.value
    }

    return this.findMinimumValueNode(node.left)
  }
}

// Example usage:
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// console.log(bst.search(5)) // true
// console.log(bst.search(8)) // false

const inOrderValues = bst.inOrderTraversal()
console.log(inOrderValues) // [3, 5, 7, 10, 15]

const preOrderValues = bst.preOrderTraversal()
console.log(preOrderValues) // [3, 5, 7, 10, 15]

const postOrderValues = bst.postOrderTraversal()
console.log(postOrderValues) // [3, 5, 7, 10, 15]

// console.log(bst.findMinimumValue())
