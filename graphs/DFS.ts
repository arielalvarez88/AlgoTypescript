import { Edge } from "./Edge";
import { Graph } from "./Graph";

export class DFS{
    connectedComponents: number;
    visited: boolean[];
    nodeToConnectedComponent: number[];
    graph: Graph;

    constructor(graph: Graph){
        this.graph = graph;
        this.connectedComponents = 0;
        this.visited = new Array(graph.nodes.length).fill(false);
        this.nodeToConnectedComponent = new Array(graph.nodes.length);
    }

    run(){
        this.connectedComponents = 0;
        this.clearGraph();
        for(let v = 0; v < this.graph.nodes.length; v++){
          if(!this.visited[v]){
            this.connectedComponents++;
            this.explore(v);
          }
        }
    }

    explore(nodeIndex: number){
        this.nodeToConnectedComponent[nodeIndex] = this.connectedComponents;
        this.visited[nodeIndex] = true;
        const outGoingEdges = this.graph.adjacencyList[nodeIndex];
        let edge: Edge;
        while(edge = outGoingEdges.next()){
            const neighborIdx = edge.to;
            if(!this.visited[neighborIdx]) {
                this.explore(neighborIdx);
            }
        }        
    }
    
    clearGraph(){
        this.visited.fill(false);
        this.nodeToConnectedComponent = new Array(this.graph.nodes.length);
    }
}