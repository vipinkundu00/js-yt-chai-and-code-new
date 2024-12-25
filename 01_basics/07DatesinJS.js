// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);
// let myCreatedDate = new Date(2023,0, 23);
// let myCreatedDate = new Date(2023,0,23,5,3);
// let myCreatedDate = new Date("2023-01-12");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);

let newDate = new Date();
// console.log(newDate);
newDate.toLocaleDateString('default',{
    weekday: "long",
    
})

