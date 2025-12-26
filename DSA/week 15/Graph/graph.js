class Graph{
    constructor(){
        this.list={}
    }
    
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }
    
    addEdge(v1,v2){
        if(this.list[v1] && this.list[v2]){
            this.list[v1].add(v2)
            this.list[v2].add(v1)
        }else{
            if(!this.list[v1])console.log(v1,'vertex is not in this graph...')
            if(!this.list[v2])console.log(v2,'vertex is not in this graph...')
        }
    }
    
    dfs(startNode,visited=new Set()){
        visited.add(startNode)
        console.log(startNode)

        for( let neighbour of this.list[startNode]){
            if(!visited.has(neighbour)){
                this.dfs(neighbour,visited)
            }
        }
    }
    
    bfs(startNode,visited=new Set()){
        console.log('-- bfs --')
        let queue=[startNode]
        visited.add(startNode)
        
        while(queue.length>0){
            let curr=queue.shift()
            console.log(curr)
            
            for(let neighbour of this.list[curr]){
                if(!visited.has(neighbour)){
                    queue.push(neighbour)
                    visited.add(neighbour)
                    
                }
            }
            
        }
    }
}

const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C") 
graph.addVertex("D") 
graph.addEdge("A","D")
graph.addEdge("A","C")
graph.addEdge("D","B")
graph.addEdge("C","B")
graph.dfs("A")
graph.bfs("A")