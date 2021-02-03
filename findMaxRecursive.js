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

let result = helper([2, 2, 1000, 11111111]);
