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
}

let gh = new Graph();
let node = gh.addNode({'name' : 'Pookie'});
//console.log(gh.nodes.get('0').properties);
//console.log(gh);
let result: any[] = gh.findNodes("name","Pookie");
console.log(result);