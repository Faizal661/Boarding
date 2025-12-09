class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }


    insert(data) {
        let newNode = new Node(data)
        let current = this.root
        if (this.root === null) {
            this.root = newNode
            return
        }
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode
                    return
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return
                } else {
                    current = current.right
                }
            }
        }
    }

    inorder(node=this.root, res = []) {
        if (node) {
            this.inorder(node.left, res)
            res.push(node.data)
            this.inorder(node.right, res)
        }
        return res
    }

}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(4)
bst.insert(17)
bst.insert(1)
bst.insert(123)
bst.insert(24)

console.log('inorder')
console.log(bst.inorder())


function KthLargest(k, node = bst.root) {
    let count = 0
    let kth = null;

    function dfs(node) {
        if (kth || !node) return

        dfs(node.right)

        count++
        if (count === k) {
            kth = node.data
        }
        if (kth) return kth

        dfs(node.left)
    }

    return dfs(node)
}

console.log('KthLargest ===> ')
console.log(KthLargest(2))