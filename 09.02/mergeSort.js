function mergeSort(arr){
    if (arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    let result = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        if (leftArr[leftIndex] < rightArr[rightIndex]){
            result.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([]));
console.log(mergeSort([6,5,4,3,2,1]));
console.log(mergeSort([2,4,6,8,0,1,3,5,7,9]));
