// const tinderUser = new Object();  Both are ways to declare a new object. this one and below one also
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b",};
const obj2 = {3:"c", 4:"d"};

// ------------> merging of two objects <-------------------
// const obj3 = {obj1, obj2};  // bad way of merging two objects
// const obj3 = Object.assign({},obj1, obj2);  // better way of merging two or more objects
const obj3 = { ...obj1, ...obj2};  // spread opertor best way to merge two or more objects

// console.log(obj3);

const users = [
    {
      id: 1,
      email : "h@gmail.com",  
    },
   {

   },
   {

   }
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to enquire about some property of an object use .hasOwnProperty


// ------------------> Destructuring <----------------------


const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor: "hitesh",
}

course.courseinstructor;

const {courseinstructor: instructor} = course;
// console.log(instructor);

// const navbar = ({company}) => { // {} it means destructuring
    
// }

// navbar(company = "hitesh");

// {                                       // syntax of a json
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
// }

// [                               // data in an api can be found in this format also. objects inside array
//     {},
//     {},
//     {}
// ]





