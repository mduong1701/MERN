const callBack = num => num > 5;

// const dropIt = (arr, cb)  => {
//     for (let i = 0; i < arr.length; i++){
//         if (cb(arr[i])){
//             return arr.slice(i);
//         }
//     }
//     return [];
// }

// OR

const dropIt = (arr, cb)  => {
    if (arr.length === 0){
        return [];
    }
    let i;
    for (i = 0; i < arr.length; i++){
        if (cb(arr[i])){
            break
        }
    }

    let newArr = [];
    for (let j = i; j < arr.length; j++){
        newArr.push(arr[j]);
    }
    return newArr;
}

const arr1 = [1, 4, 3, 6, 9, 15];

console.log(dropIt(arr1, callBack));