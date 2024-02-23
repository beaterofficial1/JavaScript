// Premitive DataTypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Number
const score = 100
const scoreValue = 100.3
// console.log(typeof score);

//BigInt
const bigNumber = BigInt(4546468)
// console.log(typeof bigNumber);

//String
const username = "@beaterofficial01"
// console.log(typeof username);

//Boolean
const isLoggedIn = true
// console.log(typeof isLoggedIn);

//null
const temp = null
// console.log(typeof temp);

//undefined
let userEmail;
// console.log(typeof userEmail);

//symbol
let id = Symbol('123')
// console.log(typeof id);

// Non-Premitive DataTypes
// Allocated Reference

// Array, Objects, Function

//Array 

const heros = ["ironman", "batman", "spiderman"]
console.log(typeof heros);

//Objects

const myObj = {
    username: "Beaterofficial",
    age: 18
}

// console.log(typeof myObj);

//Function

const sayHello = function (name) {
    console.log(`Hello ${name}`);
}

// console.log(typeof sayHello);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => COPY, Heap (NoN-Primitive) => Reference