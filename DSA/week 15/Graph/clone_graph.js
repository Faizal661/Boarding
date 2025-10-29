class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set()
        }
    }

    addEdge(v1, v2) {
        if (this.list[v1] && this.list[v2]) {
            this.list[v1].add(v2)
            this.list[v2].add(v1)
        } else {
            if (!this.list[v1]) console.log(v1, 'vertex is not in this graph...')
            if (!this.list[v2]) console.log(v2, 'vertex is not in this graph...')
        }
    }

    clone() {
        const newGraph = new Graph()

        for (let vertex in this.list) {

            newGraph.addVertex(vertex)

            for (let item of this.list[vertex]) {
                newGraph.list[vertex].add(item)
            }

        }

        return newGraph
    }



}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A", "D")
graph.addEdge("A", "C")
graph.addEdge("D", "B")
graph.addEdge("C", "B")

const clonedGraph=graph.clone()
clonedGraph.addEdge("B","A")
console.log(graph.list)
console.log(clonedGraph.list)