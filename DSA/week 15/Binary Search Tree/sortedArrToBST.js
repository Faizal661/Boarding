const arr = [1, 2, 2, 3, 4, 5, 6, 7]

console.log(arr)

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function convBST(arr) {

  const binarySearch = (start, end) => {
    if (start > end) return
    let mid = Math.floor((start + end) / 2)

    let root = new Node(arr[mid])

    root.left = binarySearch(start, mid - 1)
    root.right = binarySearch(mid + 1, end)
    return root
  }
  return binarySearch(0, arr.length - 1)
}

const sortedBSt = convBST(arr)

console.log(sortedBSt)