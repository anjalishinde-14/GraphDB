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
    addNode(properties:{}):string{
        const nodeId = (this.nodeIdCounter++).toString();
        this.nodes.set(nodeId,{
            id:nodeId,
            properties,
            inedges: new Set(),
            outedges: new Set()
        })
        return nodeId;
    }
}

let gh = new Graph();
let node = gh.addNode({'name' : 'Pookie'});
console.log(gh.nodes.get('0').properties);
//console.log(gh);