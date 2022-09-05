const swap = (arr, leftIndex, rightIndex) => {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}
// // =======================================================
const partition = (arr, left, right) => {
    let pivot  = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j){
        while (arr[i] < pivot){
            i++;
        }
        while (arr[j] > pivot){
            j--;
        }
        if (i <= j){
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
// // =======================================================
const quickSort = (arr, left, right) => {
    let index;
    if (arr.length > 1){
        index = partition(arr, left, right);
        if (left < index - 1){
            quickSort(arr, left, index - 1);
        }
        if (index < right){
            quickSort(arr, index, right);
        }
    }
    return arr;
}
// // =======================================================
let arr = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

// var items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]