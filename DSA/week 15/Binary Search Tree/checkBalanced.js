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

    inorder(node, res = []) {
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
console.log(bst.inorder(bst.root))


function checkBalanced(root) {
    function balanceFactor(root) {
        if (root === null) return 0

        let leftBalance = balanceFactor(root.left)
        if (leftBalance === -1) return -1

        let rightBalance = balanceFactor(root.right) 
        if (rightBalance === -1) return -1

        let currBalance = Math.abs(leftBalance - rightBalance)
        if (currBalance > 1) return -1

        return Math.max(leftBalance,rightBalance) + 1
    }

    return balanceFactor(root) !== -1
}

console.log('Balanced or not ==> ')
console.log(checkBalanced(bst.root))