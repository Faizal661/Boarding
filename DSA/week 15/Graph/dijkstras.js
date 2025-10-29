class MinPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(data, priority) {
        this.values.push({ data, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        // For an undirected graph, add the edge in both directions.
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    // Dijkstra's algorithm implementation
    dijkstra(start, finish) {
        const distances = {};
        const previous = {};
        const pq = new MinPriorityQueue();
        const path = []; // to store the final path

        // 1. Initialize distances and priority queue
        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        console.log(distances)
        console.log(previous)
        console.log(pq)
        console.log(path)

        // 2. Main loop: process nodes from the priority queue
        while (!pq.isEmpty()) {
            const { data: currentVertex, priority: currentDistance } = pq.dequeue();

            if (currentVertex === finish) {
                // Reconstruct path and return
                let temp = finish;
                while (previous[temp]) {
                    path.unshift(temp);
                    temp = previous[temp];
                }
                path.unshift(start);
                return { path, distance: distances[finish] };
            }

            // A small optimization: skip if already processed with a shorter path.
            // This is necessary because the priority queue may contain duplicate entries.
            if (currentDistance > distances[currentVertex]) {
                continue;
            }

            // 3. Update distances for neighbors
            this.adjacencyList[currentVertex].forEach(neighbor => {
                const newDistance = distances[currentVertex] + neighbor.weight;

                // Relaxation step: if a shorter path is found, update distance and previous vertex
                if (newDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = newDistance;
                    previous[neighbor.node] = currentVertex;
                    pq.enqueue(neighbor.node, newDistance);
                }

                console.log('-- --- -- -- ---')
                console.log(distances)
                console.log(previous)
                console.log(pq)
                console.log(path)
            });
        }
        return { path: null, distance: Infinity }; // Path not found
    }
}

const graph = new WeightedGraph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Add edges
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.adjacencyList);

// Find the shortest path from "A" to "E"
const shortestPath = graph.dijkstra("A", "E");
console.log("\nShortest path from A to E:", shortestPath);
// Expected output: { path: [ 'A', 'C', 'D', 'F', 'E' ], distance: 8 }
