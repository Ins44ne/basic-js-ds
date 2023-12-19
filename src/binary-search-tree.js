const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = this._addNode(this.rootNode, data)
  }

  _addNode(node, data) {
    if (node === null) {
      return new Node(data)
    }

    if (data < node.data) {
      node.left = this._addNode(node.left, data)
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data)
    }

    return node
  }

  has(data) {
    return this._hasNode(this.rootNode, data)
  }

  _hasNode(node, data) {
    if (node === null) {
      return false
    }

    if (data === node.data) {
      return true
    } else if (data < node.data) {
      return this._hasNode(node.left, data)
    } else {
      return this._hasNode(node.right, data)
    }
  }

  find(data) {
    return this._findNode(this.rootNode, data)
  }

  _findNode(node, data) {
    if (node === null) {
      return null
    }

    if (data === node.data) {
      return node
    } else if (data < node.data) {
      return this._findNode(node.left, data)
    } else {
      return this._findNode(node.right, data)
    }
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data)
  }

  _removeNode(node, data) {
    if (node === null) {
      return null
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null
      } else if (node.left === null) {
        return node.right
      } else if (node.right === null) {
        return node.left
      } else {
        const minRightNode = this._findMinNode(node.right)
        node.data = minRightNode.data
        node.right = this._removeNode(node.right, minRightNode.data)
        return node
      }
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data)
      return node
    } else {
      node.right = this._removeNode(node.right, data)
      return node
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  min() {
    const minNode = this._findMinNode(this.rootNode)
    return minNode ? minNode.data : null
  }

  max() {
    const maxNode = this._findMaxNode(this.rootNode)
    return maxNode ? maxNode.data : null
  }

  _findMaxNode(node) {
    while (node.right !== null) {
      node = node.right
    }
    return node
  }
}

module.exports = {
  BinarySearchTree,
}
