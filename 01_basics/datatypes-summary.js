// Primitive 

// 7 types : String, Number, Boolean , null, undefined , symbol, BigInt

// const score = 125; --> number 
// const scoreValue = 1254.6; --> also a number
// let userEmail; --> undefined
// let password = "zulu"; --> string

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);


// Reference type ( Non primitive data type) ---> 

// Arrays, Objects, Functions 

let heros = [1,2,7,23, 79] //---> arrays
let mySelf= {  // this is an object 
    name: hitesh,
    age : 45,
} 

const myFunction = function(){
    console.log("hello world");
}