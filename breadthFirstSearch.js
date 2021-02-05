function BFS(graph, start, end) {
    let queue = graph[start];
    let visited = [];
    while (queue.length) {
        let value = queue.shift();
        if (value === end) {
            return true
        } else {
            if(!visited.includes(value)) queue = queue.concat(graph[value]);
        }
        visited.push(value);
    }
    return false
}
let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []
BFS(graph, 'you', 'jonny');

