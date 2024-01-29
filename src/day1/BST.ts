import Queue from './Queue'

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

  delete(key: number): void {
    this.root = this.deleteValueNode(this.root, key)
  }

  private deleteValueNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
      return null
    }

    if (key === root.value) {
      // Node to be deleted found
      root = this.deleteNode(root)
    } else if (key < root.value) {
      root.left = this.deleteValueNode(root.left, key)
    } else if (key > root.value) {
      root.right = this.deleteValueNode(root.right, key)
    }

    return root
  }

  private deleteNode(root: TreeNode): TreeNode | null {
    // Case 1: Node with only one child or no child
    if (root.left === null) {
      return root.right
    } else if (root.right === null) {
      return root.left
    }

    // Case 2: Node with two children
    // Find the smallest value in the right subtree (successor)
    root.value = this.findMinValue(root.right)

    // Delete the successor from the right subtree
    root.right = this.deleteValueNode(root.right, root.value)

    return root
  }

  private findMinValue(root: TreeNode): number {
    while (root.left !== null) {
      root = root.left
    }
    return root.value
  }

  byLevelTraverse(): number[] | null {
    if (!this.root) {
      return null
    }

    const result: number[] = []

    const traverseQueue = new Queue<TreeNode>()
    traverseQueue.enqueue(this.root)

    return this.levelTraverse(traverseQueue, result)
  }

  private levelTraverse(traverse: Queue<TreeNode>, result: number[]): number[] {
    if (traverse.isEmpty) {
      return result
    }

    const node = traverse.deque()

    if (node) {
      if (node.left && node.right) {
        traverse.enqueue(node.left)
        traverse.enqueue(node.right)
      } else if (node.left) {
        traverse.enqueue(node.left)
      } else if (node.right) {
        traverse.enqueue(node.right)
      }

      result.push(node.value)
    }

    return this.levelTraverse(traverse, result)
  }

  height(): number {
    return this.treeHeight(this.root)
  }

  private treeHeight(root: TreeNode | null): number {
    if (!root) {
      return 0
    }

    if (!root.left && !root.right) {
      return 0
    }

    return 1 + Math.max(this.treeHeight(root.left), this.treeHeight(root.right))
  }

  findMinDepth(): number {
    return this.findTreeMinDepth(this.root)
  }

  private findTreeMinDepth(root: TreeNode | null): number {
    if (!root) {
      return 0
    }

    if (!root.left && !root.right) {
      return 0
    }

    const leftHeight = this.findTreeMinDepth(root.left)
    const rightHeight = this.findTreeMinDepth(root.right)

    return 1 + Math.min(leftHeight, rightHeight)
  }
}

// Example usage:
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(8)
bst.insert(17)

const result = bst.byLevelTraverse()
console.log(result)

console.log('max: ', bst.height())

console.log('min: ', bst.findMinDepth())

// console.log(bst.search(5)) // true
// console.log(bst.search(8)) // false

// const inOrderValues = bst.inOrderTraversal()
// console.log(inOrderValues) // [3, 5, 7, 10, 15]

// bst.delete(5)
// console.log(bst.inOrderTraversal()) // [3, 7, 10, 15]

// const preOrderValues = bst.preOrderTraversal()
// console.log(preOrderValues) // [3, 5, 7, 10, 15]

// const postOrderValues = bst.postOrderTraversal()
// console.log(postOrderValues) // [3, 5, 7, 10, 15]

// console.log(bst.findMinimumValue())
