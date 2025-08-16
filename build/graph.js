"use strict";
class Graph {
    constructor() {
        this.nodes = new Map;
        this.edges = new Map;
        this.nodeIdCounter = 0;
        this.edgeIdCounter = 0;
    }
    addNode(properties) {
        const nodeId = (this.nodeIdCounter++).toString();
        this.nodes.set(nodeId, {
            id: nodeId,
            properties,
            inedges: new Set(),
            outedges: new Set()
        });
        return nodeId;
    }
    findNodes(key, value) {
        const result = [];
        for (let [x, node] of this.nodes) {
            if (node.properties[key] == value) {
                result.push(node);
            }
        }
        return result;
    }
    addEdge(fromNodeId, toNodeId, properties) {
        if (this.nodes.has(fromNodeId) && this.nodes.has(toNodeId)) {
            const edgeId = (this.edgeIdCounter++).toString();
            this.edges.set(edgeId, {
                id: edgeId,
                properties,
                fromNodeId,
                toNodeId
            });
            this.nodes.get(fromNodeId).outedges.add(edgeId);
            this.nodes.get(toNodeId).inedges.add(edgeId);
            return edgeId;
        }
        else {
            return "fromNodeId/toNodeId doesnot exist";
        }
    }
    deleteEdge(edgeId) {
        let edge = this.edges.get(edgeId);
        if (!edge)
            return false;
        this.nodes.get(edge.fromNodeId).outedges.delete(edgeId);
        this.nodes.get(edge.toNodeId).inedges.delete(edgeId);
        this.edges.delete(edgeId);
        this.edgeIdCounter--;
        return true;
    }
    deleteNode(nodeId) {
        let node = this.nodes.get(nodeId);
        if (!node1)
            return false;
        for (let edge of node.inedges)
            this.deleteEdge(edge);
        for (let edge of node.outedges)
            this.deleteEdge(edge);
        this.nodes.delete(nodeId);
        this.nodeIdCounter--;
        return true;
    }
    getNeighbors(nodeId) {
        let node = this.nodes.get(nodeId);
        if (!node)
            return null;
        let neighbors = {
            inbound: [],
            outbound: []
        };
        for (let egdeId of node.inedges) {
            let edge = this.edges.get(egdeId);
            let node = this.nodes.get(edge.fromNodeId);
            neighbors.inbound.push(node);
        }
        for (let egdeId of node.outedges) {
            let edge = this.edges.get(egdeId);
            let node = this.nodes.get(edge.toNodeId);
            neighbors.outbound.push(node);
        }
        return neighbors;
    }
    getNode(nodeId) {
        return this.nodes.get(nodeId);
    }
    getEdge(edgeId) {
        return this.edges.get(edgeId);
    }
    updateNode(nodeId, properties) {
        let node = this.nodes.get(nodeId);
        if (!node)
            return null;
        node.properties = properties;
    }
}
let graph = new Graph();
let node0 = graph.addNode({ 'name': 'Mitsuri' });
let node1 = graph.addNode({ 'name': 'Obanai' });
console.log(graph.nodes.get(node0).properties);
let result = graph.findNodes("name", "Obanai");
console.log(result);
let edge1 = graph.addEdge(node0, node1, { 'relation': 'friend' });
graph.updateNode(node0, { 'name': 'Tanjiro' });
console.log(graph.getNode('0'));
graph.deleteEdge(edge1);
console.log(graph);
