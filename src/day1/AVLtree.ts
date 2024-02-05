class AVLNode {
  value: number
  height: number
  left: AVLNode | null
  right: AVLNode | null

  constructor(value: number) {
    this.value = value
    this.height = 1
    this.left = null
    this.right = null
  }
}

class AVLTree {
  root: AVLNode | null

  constructor() {
    this.root = null
  }

  getHeight(node: AVLNode | null): number {
    return node ? node.height : 0
  }

  getBalanceFactor(node: AVLNode | null): number {
    if (!node) {
      return 0
    }

    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  updateHeight(node: AVLNode): void {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
  }

  rotateRight(y: AVLNode): AVLNode {
    const x = y.left!
    const T2 = x.right

    // Perform rotation
    x.right = y
    y.left = T2

    // Update heights
    this.updateHeight(y)
    this.updateHeight(x)

    return x
  }

  rotateLeft(x: AVLNode): AVLNode {
    const y = x.right!
    const T2 = y.left

    // Perform rotation
    y.left = x
    x.right = T2

    // Update heights
    this.updateHeight(x)
    this.updateHeight(y)

    return y
  }

  insert(value: number): void {
    this.root = this.insertRecursive(this.root, value)
  }

  insertRecursive(root: AVLNode | null, value: number): AVLNode {
    if (!root) {
      return new AVLNode(value)
    }

    if (value < root.value) {
      root.left = this.insertRecursive(root.left, value)
    } else if (value > root.value) {
      root.right = this.insertRecursive(root.right, value)
    } else {
      // Duplicate values not allowed
      return root
    }

    // Update height of current node
    this.updateHeight(root)

    // Get the balance factor to check if rotation is needed
    const balance = this.getBalanceFactor(root)

    // Left Heavy
    if (balance > 1) {
      if (value < root.left!.value) {
        // Left Left Case
        return this.rotateRight(root)
      } else {
        // Left Right Case
        root.left = this.rotateLeft(root.left!)
        return this.rotateRight(root)
      }
    }

    // Right Heavy
    if (balance < -1) {
      if (value > root.right!.value) {
        // Right Right Case
        return this.rotateLeft(root)
      } else {
        // Right Left Case
        root.right = this.rotateRight(root.right!)
        return this.rotateLeft(root)
      }
    }

    return root
  }

  // In-order traversal to display the elements
  inOrderTraversal(node: AVLNode | null): void {
    if (node) {
      this.inOrderTraversal(node.left)
      console.log(node.value)
      this.inOrderTraversal(node.right)
    }
  }
}

// Example usage
const avlTree = new AVLTree()

avlTree.insert(33)
avlTree.insert(13)
avlTree.insert(53)
avlTree.insert(61)
avlTree.insert(11)
avlTree.insert(21)
avlTree.insert(8)
avlTree.insert(9)
avlTree.insert(45)

console.log('In-order traversal of the AVL tree:')
avlTree.inOrderTraversal(avlTree.root)
