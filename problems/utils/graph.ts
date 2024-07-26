import { Edge } from "../../graphs/Edge";
import { Graph } from "../../graphs/Graph";
import { GraphNode } from "../../graphs/GraphNode";

export function createDirectedGraph(){
    const node0 = new GraphNode(0);
    const node1 = new GraphNode(1);

    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);

    const edge0To1 = new Edge(0, 1);

    const edge2To3 = new Edge(2, 3);

    return new Graph({nodes: [node0, node1, node2, node3], edges: [edge0To1, edge2To3], isDirected: true});

} 