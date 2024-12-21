const name = "hitesh ";
const repoCount = 100;
// console.log(name + repoCount  ); // this is old way of writing syntax, not advisable

// console.log(` Hello my name is ${name} and my repo count is ${repoCount}`); // this is modern way of concatenation and writing syntax

const gameName = new String('hitesh@hc.com');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4);
// console.log(newString);

const newSplit = gameName.split('--');
console.log(newSplit);

// const anotherString = gameName.slice(-5,4);
// console.log(anotherString);

// const newStringOne = "   Hitesh   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.replace('%20','-'));
// console.log(url.includes('hitesh'));
// console.log(url.includes('alpha'));

console.log(gameName.split('-'));


