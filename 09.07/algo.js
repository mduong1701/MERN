function consec(arr, target){
    let result = [];
    for (var i = 0; i < arr.length; i++){
        let sum = arr[i];
        let arr1 = [arr[i]];
        if (arr[i] == 16){
            result.push(arr1);
            break;
        }
        let j = i + 1;
        while (sum < target){
            if (arr[j] == 0){
                arr1.push(arr[j]);
                j++;
            }
            sum += arr[j];
        
        }
            
        

    }
}