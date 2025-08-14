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
}

let gh = new Graph();
let node0 = gh.addNode({'name' : 'Pookie'});
let node1 = gh.addNode({'name' : 'Momma'});
//console.log(gh.nodes.get('0').properties);
//console.log(gh);
// let result: any[] = gh.findNodes("name","Pookie");
// console.log(result);
let edge = gh.addEdge('0','1',{'relation' : 'forlife'});
//console.log(edge);
//console.log(gh);
console.log(gh.edges.get('0').properties['relation']);
