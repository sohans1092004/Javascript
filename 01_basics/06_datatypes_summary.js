//2 types of datatypes
//PRIMITIVE and NON-PRIMITIVE based on the way how data is stored in memory and how its accessed.

// Primitive are accessed by value
// Non primitive are accessed by reference

// Primitive - String, Number, Boolean, NULL, Undefined, Bigint, Symbol
//Non Primitive - Arrays, Objects, Functions

// JS is a dynamically tyoed language, means that you dont have to define the datatype specfically while declaring a variable.

const id=Symbol('123')
const id1=Symbol('123')

console.log(id==id1)//false


//Arrays, objects, functions
const heros = ["peace", " kami"]; // array

//Object
let myObj = {
    name: "sai",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}
