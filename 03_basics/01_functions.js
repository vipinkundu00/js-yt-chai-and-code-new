
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2 );
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2 
    // return result;

    return num1 + num2 
}

const result = addTwoNumbers(3,"a");
// console.log("Result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2 ,...num1){           // ... is rest operator
return num1
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "sam",
    price : 399
})

const myNewArray =[200,400,100,600];
        function returnSecondValue(getArray){
            return getArray[1];
        }

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));