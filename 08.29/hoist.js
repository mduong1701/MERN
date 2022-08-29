// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//------------------------------------------------------

// console.log(example);
// let example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// let example;
// console.log(example); // Error
// example = "I'm the example!";

//------------------------------------------------------

// console.log(hello);
// var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

//------------------------------------------------------

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test(); // magnet

//------------------------------------------------------

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan); // super cool

//------------------------------------------------------

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// AFTER HOISTING BY THE INTERPRETER
// var food;
// function eat() {
//     var food
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // chicken
// eat(); // half-chicken

//------------------------------------------------------

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean
// mean();  // error
// console.log(food);
// mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//------------------------------------------------------

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // undefined
// genre = "disco"; 
// rewind(); // rock r&b
// console.log(genre); // disco

//------------------------------------------------------

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); // san jose
// learn(); // seattle burbank
// console.log(dojo); // san jose

//------------------------------------------------------

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     // else if (dojo.students <= 0) {
//     //     dojo = "closed for now";
//     // }
//     return dojo;
// }
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students) {
//     const dojo;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now"; // Error: dojo is a const
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));


