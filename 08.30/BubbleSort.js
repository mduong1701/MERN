bubbleSort = (arr) => {
    for( let i = 0; i < arr.length; i++){
        for( let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([4,1,5,2,3]));
console.log(bubbleSort([4,3,2,1,5]));
console.log(bubbleSort([5,1]));
console.log(bubbleSort([5,1,9,2,7,10,3,6,4,8]));