class UndirectedGraph {
    constructor() {
        this.adj = new Map();
    }

    addEdge(v, w) {
        if (!this.adj.has(v)) this.adj.set(v, []);
        if (!this.adj.has(w)) this.adj.set(w, []);
        this.adj.get(v).push(w);
        this.adj.get(w).push(v);
    }

    isCyclic() {
        let visited = new Set();

        for (let node of this.adj.keys()) {
            if (!visited.has(node)) {
                if (this._dfs(node, visited, -1)) return true;
            }
        }
        return false;
    }

    _dfs(v, visited, parent) {
        visited.add(v);

        let neighbors = this.adj.get(v) || [];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (this._dfs(neighbor, visited, v)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
}

const udg=new UndirectedGraph()
udg.addEdge('A','B')
udg.addEdge('c','B')
udg.addEdge('c','A')
udg.addEdge('c','D')
console.log('undirected graph cycle check')
console.log(udg.isCyclic())

class DirectedGraph {
    constructor(vertices) {
        this.adj = new Map();
    }

    addEdge(v, w) {
        if (!this.adj.has(v)) this.adj.set(v, []);
        this.adj.get(v).push(w);
    }

    isCyclic() {
        let visited = new Set();
        let recStack = new Set();

        for (let node of this.adj.keys()) {
            if (this._dfs(node, visited, recStack)) return true;
        }
        return false;
    }

    _dfs(v, visited, recStack) {
        if (recStack.has(v)) return true;
        if (visited.has(v)) return false;

        visited.add(v);
        recStack.add(v);

        let neighbors = this.adj.get(v) || [];
        for (let neighbor of neighbors) {
            if (this._dfs(neighbor, visited, recStack)) return true;
        }

        recStack.delete(v);
        return false;
    }
}

const dg=new DirectedGraph()
dg.addEdge('A','B')
// dg.addEdge('B','C')
dg.addEdge('C','A')
console.log('Directed graph cycle check')
console.log(dg.isCyclic())