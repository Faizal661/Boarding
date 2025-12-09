class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
            return
        }

        let visited = [this.root]
        while (visited.length) {
            let curr = visited.shift()

            if (curr.left) visited.push(curr.left)
            else {
                curr.left = newNode
                return
            }
            if (curr.right) visited.push(curr.right)
            else {
                curr.right = newNode
                return
            }
        }
    }
}

const bt = new BinaryTree()
bt.insert(10)
bt.insert(7)
bt.insert(12)
bt.insert(19)
bt.insert(56)
bt.insert(57)
bt.insert(57)


function findHeight(root) {
    if (root == null) return 0

    let leftHeight = findHeight(root.left)
    let rightHeight = findHeight(root.right)

    return Math.max(leftHeight, rightHeight) + 1
}

console.log(findHeight(bt.root))


function findTargetHeight(target, root) {
    const queue = [root]
    while (queue.length) {
        let node = queue.shift()

        if (node.data === target) return findHeight(node)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return -1
}

console.log(findTargetHeight(67, bt.root))