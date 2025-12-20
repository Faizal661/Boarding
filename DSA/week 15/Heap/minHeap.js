class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return index * 2 + 1
    }

    getRightChildIndex(index) {
        return index * 2 + 2
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index)
        if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            const temp = this.heap[index]
            this.heap[index] = this.heap[parentIndex]
            this.heap[parentIndex] = temp

            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index = 0) {
        let smallest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex
        }
        if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex
        }

        if (index !== smallest) {
            const temp = this.heap[index]
            this.heap[index] = this.heap[smallest]
            this.heap[smallest] = temp

            this.heapifyDown(smallest)
        }
    }

    insert(val) {
        this.heap.push(val)
        this.heapifyUp(this.size() - 1)
    }

    extractMin() {
        if (!this.size()) return null
        if (this.size() === 1) {
            return console.log(this.heap.pop())
        }

        let min = this.heap[0]

        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return console.log(min)
    }

    peek() {
        console.log(this.heap[0])
    }
}


const minh = new MinHeap()
minh.insert(100)
minh.insert(67)
minh.insert(34)
minh.insert(12)
minh.insert(7)

console.log(minh.heap)

minh.peek()
minh.extractMin()
minh.extractMin()
minh.extractMin()
minh.extractMin()
minh.extractMin()
minh.extractMin()

console.log(minh.heap)