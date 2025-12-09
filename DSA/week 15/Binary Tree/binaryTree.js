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

const bt=new BinaryTree()
bt.insert(10)
bt.insert(7)
bt.insert(12)
bt.insert(19)
bt.insert(56)
bt.insert(57)

require('fs').writeFileSync('output.json',JSON.stringify(bt))