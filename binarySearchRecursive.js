function binarySearch(value, list, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (list[mid] === value) {
        return mid;
    } else if (start >= end) {
        return -1;
    }
    if (list[mid] < value) {
        return binarySearch(value, list, mid + 1, end)
    } else {
        return binarySearch(value, list, start, mid - 1)
    }
}
let list = [1, 3, 5, 8, 9, 12, 17, 30, 45, 56, 78];
let result = binarySearch(3, list, 0, list.length - 1);

