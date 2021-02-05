function pivot(arr, start=0, end=arr.length - 1) {
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    ;

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            console.log(swapIdx, i)
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);

    return swapIdx;
}

function quickSortInplace(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //3
        //left
        quickSortInplace(arr, left, pivotIndex - 1);
        //right
        quickSortInplace(arr, pivotIndex + 1, right);
    }
    return arr;
}

function quickSorts(list) {
    let pivot = list[0];
    let smaller = [];
    let greater = [];
    if (list.length < 2)
        return list;
    for (let item of list) {
        if (item < pivot) {

            smaller.push(item);
        } else if (item > pivot) {
            greater.push(item);
        }
    }
    return quickSorts(smaller).concat([pivot]).concat(quickSorts(greater));
}

quickSortInplace([-3, 2, 4, 6, 9, 100, 1, 2, 5, 3, 23])
