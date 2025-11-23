const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};

function dfs(startNode, visited = new Set()) {
    visited.add(startNode);
    console.log(startNode);

    for (const neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, visited);
        }
    }
}


dfs('A');