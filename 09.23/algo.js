const longestStr = (str) => {
    let max = 0;
    let count = 0;
    let newArr = [];
    for (let i =0; i < str.length; i++){
        if (!(newArr.includes(str[i]))){
            newArr.push(str[i]);
            count++;
            console.log(count);
        }
        else {
            if (newArr[0] === str[i]){
                console.log(newArr);
                newArr.shift();
                newArr.push(str[i]);
            }
            else {
                if (count > max){
                    max = count;
                }
                newArr = [];
                count = 0;
                newArr.push(str[i]);
            }
        }
    }
    return max;
};
console.log(longestStr("abcabc"));