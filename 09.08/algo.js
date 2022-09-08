function twoSums(arr, target){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let diff = target - arr[i];
        if (!(diff in obj)){
            obj[arr[i]] = i;
        } else {
            return [obj[diff], i]
        }
    }
    return []
}

let arr = [2,11,7,15];
let target = 9;
console.log(twoSums(arr, target));