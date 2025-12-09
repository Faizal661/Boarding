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


function getDepth(root) {
    let arr = [root]
    let depth = 0
    while (arr.length) {
        depth++
        currLen = arr.length
        for (let i = 0; i < currLen; i++) {
            curr = arr.shift()
            if (curr.left) arr.push(curr.left)
            if (curr.right) arr.push(curr.right)
        }
    }
    return depth
}

console.log("depth of a tree ===> ")
console.log(getDepth(bt.root))

function findTargetDepth(target, root) {
    let queue = [root]
    let depth = 0
    while (queue.length) {
        depth++
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            node = queue.shift()
            if (node.data === target) return depth
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return -1
}

console.log("depth of a node ===> ")
console.log(findTargetDepth(10, bt.root))
console.log(findTargetDepth(7, bt.root))
console.log(findTargetDepth(57, bt.root))
console.log(findTargetDepth(456, bt.root))
