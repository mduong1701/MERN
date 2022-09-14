const obj1 = {
    title: "Harry Potter"
}

const convert = (object) => {
    let result = [];
    for (key in object){
        result.push([key, object[key]])
    }
    return result
}

// console.log(convert(obj1));

// Insert into TABLE (firstName, lastName, age) VALUES ("James", "Smith", 21)

const sqlStatement = (arr) => {
    let keys = [], values = [];
    for (let i = 0; i < arr.length; i++){
        keys.push(arr[i][0]);
        values.push(arr[i][1]);
    }
    return `Insert into TABLE (${keys.toString()}) VALUES (${values.toString()})`
}

console.log(sqlStatement(convert(obj1)));