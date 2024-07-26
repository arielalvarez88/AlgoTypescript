import { LinkedList } from "../dataStructures/LinkedList";
import { Edge } from "./Edge";
import { GraphNode } from "./GraphNode";

export class Graph{
    nodes: GraphNode<unknown>[];
    edges: Edge[];
    isDirected: boolean;
    adjacencyList: LinkedList<Edge>[];
    
    constructor({nodes, edges, isDirected}: {nodes: GraphNode<unknown>[], edges: Edge[], isDirected: boolean}){
        this.nodes = nodes;
        this.edges = edges;
        this.isDirected = isDirected;
        this.adjacencyList = [];
        this.createAdjacencyList();
    }

    private createAdjacencyList(){
        for(let e=0; e < this.edges.length; e++){
            const edge = this.edges[e];
            let linkedListForFrom = this.adjacencyList[edge.from];
            if(!linkedListForFrom){
                linkedListForFrom = this.adjacencyList[edge.from] = new LinkedList<Edge>();                 
            }
            this.adjacencyList[edge.from].append(edge);
            if(!this.isDirected){
                const reverseEdge = new Edge(edge.to, edge.from);
                this.adjacencyList[edge.to].append(reverseEdge);
            }
        }
        
        for(let n=0; n < this.nodes.length; n++){
            if(!this.adjacencyList[n]){
                this.adjacencyList[n] = new LinkedList<Edge>();
            }
        }
    }
}