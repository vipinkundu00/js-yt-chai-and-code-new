// singleton
// object.create

// objects literal

const mySym = Symbol("key1");

const JsUser = {
    name: "hitesh",
    "full name": "hitesh Choudhary",
    [mySym]: "key1",
    age: 17,
    location: "jaipur", 
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday","wednesday"]
};

// console.log(JsUser.age);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)  // to freeze objects 
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
