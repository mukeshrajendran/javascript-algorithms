function helper(list) {
    let max = list[0];
    function findMax(list) {
        if (list.length <= 0) {
            return;
        }
        if (list[0] > max) {
            max = list[0];
        }
        findMax(list.slice(1));
    }
    findMax(list.slice(1));
    return max;
}
//Without Helper function
function findMax(list) {
    let subSum;
    if (list.length == 2) {
        return list[0] > list[1] ? list[0] : list[1];
    }
    subSum = findMax(list.slice(1));
    return list[0] > subSum ? list[0] : subSum;
}

let result1 = findMax([2, 2, 1000, 11111111]);
let result2 = helper([2, 2, 1000, 11111111]);
