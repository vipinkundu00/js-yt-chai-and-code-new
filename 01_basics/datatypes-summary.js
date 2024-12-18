// Primitive 

// 7 types : String, Number, Boolean , null, undefined , symbol, BigInt

// const score = 125; --> number 
// const scoreValue = 1254.6; --> also a number
// let userEmail; --> undefined
// let password = "zulu"; --> string

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);


// Reference type ( Non primitive data type) ---> 

// Arrays, Objects, Functions 

let heros = [1,2,7,23, 79] //---> arrays


const myFunction = function(){
    console.log("hello world");
}

// ------------------> Stack and Heap memory <------------------------------------

// Stack memory used in primitive data types and heap used in non primitive data types

let myYoutubename = "hiteshchaudhrydotcom";
let anotherName = myYoutubename;
anotherName = "chaiaurcode";
// console.log(anotherName);
// console.log(myYoutubename);

let userOne = {
    Email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;
//console.log(userTwo);
userTwo.Email = "hiterh@google.com";
console.log(userOne);  
