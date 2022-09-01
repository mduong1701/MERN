function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while (i > -1 && current < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort([5,2,4,6,1,3]));
console.log(insertionSort([6,5,4,3,2,1]));
console.log(insertionSort([]));