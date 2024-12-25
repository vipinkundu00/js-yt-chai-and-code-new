// Arrays

const myArray = [0,1,2,3,4,5, true, "hitesh"] // one way of defining an array
const myArray2 = new Array(1,3,5,5,7,9) // 2nd way of defining an array. here we don't use []
// console.log(myArray[5]);
// console.log(myArray[6]);

//Array methods

// myArray.push(10);
// myArray.push(11);
// myArray.pop()

// myArray.unshift(8);
// myArray.shift();
// myArray.shift();

// console.log(myArray.includes(0));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf("hitesh"));

// const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);
// console.log(typeof(newArray));

// console.log(myArray);

// ---------------> Slice & Splice <-----------------

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("c ",myArray );





