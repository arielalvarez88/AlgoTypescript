import {beforeAll, describe, expect, test} from '@jest/globals';
import { Graph } from '../../graphs/Graph';
import { createDirectedGraph } from '../utils/graph';
import { DFS } from '../../graphs/DFS';
describe("Detecting connected components", ()=>{
    describe("given a graph with 2 connected components", ()=>{
        let graph: Graph;
        beforeAll(()=>{
            	graph = createDirectedGraph();
        });
        test("It should have labeled nodes in the same connected component with the same number", ()=>{
                const dfs = new DFS(graph);
                dfs.run();
                expect( dfs.nodeToConnectedComponent[0]).toEqual(dfs.nodeToConnectedComponent[1]);
                expect( dfs.nodeToConnectedComponent[2]).toEqual(dfs.nodeToConnectedComponent[3]);
                expect( dfs.nodeToConnectedComponent[2]).not.toEqual(dfs.nodeToConnectedComponent[0]);
        });
    })
});