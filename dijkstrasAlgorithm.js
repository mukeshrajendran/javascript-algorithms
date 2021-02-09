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
function dijkstra(graph, start, end, costs, parents) {
    let processed = []
    let node = findLowCostNode(costs, processed);
    let neighbours = null;
    while (node) {
        neighbours = graph[node];
        for (let key in neighbours) {
            if (costs[key] > (costs[node] + graph[node][key])) {
                costs[key] = costs[node] + graph[node][key];
                parents[key] = node;
            }
        }
        processed.push(node);
        node = findLowCostNode(costs, processed);
    }
    return {
        costs,
        parents
    };

}

let graph = {};
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}
costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = Infinity;
parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null
let result = dijkstra(graph, 'a', 'fin', costs, parents);
