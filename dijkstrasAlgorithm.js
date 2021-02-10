function findLowCostNode(costs, processed) {
    let smallest = Infinity;
    let node = null;
    for (let key in costs) {
        if (costs[key] < smallest && !processed.includes(key)) {
            smallest = costs[key];
            node = key;
        }
    }
    return node;
}

function initialCost(node,end){
    let initialCost = {};
    for(let key in node){
        initialCost[key] = node[key];
    }
    if(!initialCost[end]) initialCost[end] = Infinity;
    return initialCost; 
}

function initialParent(node,start,end){
    let initialParent = {};
    for(let key in node){
        initialParent[key] = start;
    }
    if(!initialParent[end]) initialParent[end] = null;
    return initialParent;

}

function dijkstra(graph, start,end) {
    let costs = initialCost(graph[start],end);
    let parents = initialParent(graph[start],start,end);
    let processed = []
    let node = findLowCostNode(costs, processed);
    let neighbours = null;
    while(node){
        neighbours = graph[node];
        for(let key in neighbours){
            costs[key] = costs[key] || Infinity;
           if(costs[key]> (costs[node]+graph[node][key])){
               costs[key] = costs[node]+graph[node][key];
               parents[key] = node;
           }
        }
        processed.push(node);
        node = findLowCostNode(costs,processed);
    }
    return {costs,parents};

}

let graph = {};
graph['a'] = {};
graph['a']['b'] = 4;
graph['a']['c'] = 2;
graph['b'] = {};
graph['b']['e'] = 3;
graph['c'] = {};
graph['c']['d'] = 2;
graph['c']['f'] = 4;
graph['d'] = {};
graph['d']['e'] = 3;
graph['d']['f'] = 1;
graph['e'] = {};
graph['e']['f'] = 3;
graph['f'] = {};
let result = dijkstra(graph, 'a', 'e');
