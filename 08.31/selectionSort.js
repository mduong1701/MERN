function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if (minIndex != i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([6,5,4,3,2,1]));
console.log(selectionSort([6,2,4,1,5,3]));
console.log(selectionSort([5,3,6,2,4,1]));
console.log(selectionSort([34,78,21,27,38,22]));
console.log(selectionSort([]));