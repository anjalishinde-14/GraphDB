type Neighbor = {
    inbound : any[],
    outbound : any[]
}
class Graph{
    nodes: Map<string,any>;
    edges: Map<string,any>;
    nodeIdCounter: number;
    edgeIdCounter: number;
    constructor(){
        this.nodes= new Map;
        this.edges= new Map;
        this.nodeIdCounter=0;
        this.edgeIdCounter=0;
    }
    addNodes(properties:{}):string{
        const nodeId = (this.nodeIdCounter++).toString();
        this.nodes.set(nodeId,{
            id:nodeId,
            properties,
            inedges: new Set(),
            outedges: new Set()
        })
        return nodeId;
    }
    findNodes(key:string, value:string):any[]{
        const result: any[]=[];
        for(let [x,node] of this.nodes){
            if(node.properties[key]==value){
                result.push(node);
            }
        }
        return result;
    }
     addEdge(fromNodeId:string,toNodeId:string,properties:{}):string{
        if(this.nodes.has(fromNodeId) && this.nodes.has(toNodeId)){
            const edgeId = (this.edgeIdCounter++).toString();
            this.edges.set(edgeId,{
                id: edgeId,
                properties,
                fromNodeId,
                toNodeId
            })
            this.nodes.get(fromNodeId).outedges.add(edgeId);
            this.nodes.get(toNodeId).inedges.add(edgeId);
            return edgeId;
        }else{
            return "fromNodeId/toNodeId doesnot exist";
        }
    }
    deleteEdge(edgeId: string): boolean{
        let edge = this.edges.get(edgeId);
        if(!edge)
            return false;
        this.nodes.get(edge.fromNodeId).outedges.delete(edgeId);
        this.nodes.get(edge.toNodeId).inedges.delete(edgeId);
        this.edges.delete(edgeId);
        this.edgeIdCounter--;
        return true;
    }
    deleteNode(nodeId : string) : boolean{
        let node = this.nodes.get(nodeId);
        if(!node1)
            return false;
       for(let edge of node.inedges)    this.deleteEdge(edge);
       for(let edge of node.outedges)   this.deleteEdge(edge);
       this.nodes.delete(nodeId);
       this.nodeIdCounter--;
       return true;
    }
    getNeighbors(nodeId : string){
        let node = this.nodes.get(nodeId);
        if(!node)
            return null;
        let neighbors : Neighbor = {
            inbound : [],
            outbound : []
        }
        for(let egdeId of node.inedges){
            let edge = this.edges.get(egdeId);
            let node = this.nodes.get(edge.fromNodeId);
            neighbors.inbound.push(node);
        }
        for(let egdeId of node.outedges){
            let edge = this.edges.get(egdeId);
            let node = this.nodes.get(edge.toNodeId);
            neighbors.outbound.push(node);
        }
        return neighbors;
    }
    getNode(nodeId : string){
        return this.nodes.get(nodeId);
    }
    getEdge(edgeId : string){
        return this.edges.get(edgeId);
    }
    updateNode(nodeId : string, properties: Object){
        let node = this.nodes.get(nodeId);
        if(!node)
            return null
        node.properties = properties;
    }
}

let graph = new Graph();

let node0 = graph.addNodes({'name' : 'Mitsuri'});
let node1 = graph.addNodes({'name' : 'Obanai'});
console.log(graph.nodes.get(node0).properties);

let result: any[] = graph.findNodes("name","Obanai");
console.log(result);

let edge1 = graph.addEdge(node0,node1,{'relation' : 'friend'});

graph.updateNode(node0,{'name' : 'Tanjiro'});
console.log(graph.getNode('0'));

graph.deleteEdge(edge1);

console.log(graph);


export default Graph;