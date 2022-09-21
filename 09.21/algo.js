const helper = (str) => {
    let temp = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            if (temp.length >= 1) {
                temp.pop();
            }
        }
        else {
            temp.push(str[i])
        }
    }
    return temp.join("");
}

const compare = (S,T) => {
    return helper(S) === helper(T);
}

const S1 = "ab#c";
const T1 = "ad#c";
        
const S2 = "ab##";
const T2 = "c#d#";

const S3 = "a##c";
const T3 = "#a#c";

const S4 = "a#c";
const T4 = "b";

console.log(compare(S1, T1));
console.log(compare(S2, T2));
console.log(compare(S3, T3));
console.log(compare(S4, T4));