//setTimeout-first async example

// console.log("hello")
// setTimeout(()=>{
//     console.log("BC");
// },3000);

// console.log("D");
// components of ASYNC js
// Call Stack

// Web APIs

// Callback Queue

// Event Loop

//flow
// JS runs sync code
//          ||
// Async tasks go to Web APIs
//          ||
// After completion → callback queue
//          ||
// Event loop pushes to call stack

//call back

// function greet(name, callback){
//     console.log("hello" + name);
//     callback();
// }

// greet("Amit", function(){
//     console.log("Goodbye.")
// });

// function FetchData(callback){
//     setTimeout(()=>{
//         callback("Data Recieved")
//     },2000);
// }

// FetchData(data=>{
//     console.log(data);
// });

// console.log("start");

//  setTimeout(()=>{
//     console.log("this runs after 3000ms");

//  },3000);

//  console.log("end");

//1st example
// function placeOrder(callback) {
//   console.log("Order placed...");
  
//   setTimeout(function () {
//     console.log("Order prepared");
//     callback();
//   }, 3000);
// }

// function orderDelivered() {
//   console.log("Order delivered 🚚");
// }

// placeOrder(orderDelivered);

//2nd example
// function Prepareorder(callback){
//    console.log("Get to work");
//    setTimeout(()=>{
//       console.log("In progres...");
//       callback();
//    },3000);
   


// }

// function Delivered(){
//    console.log("Done...!");
// };

// Prepareorder(Delivered);

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log(calculate(5, 3, add));      // 8
// console.log(calculate(5, 3, multiply)); // 15


//fake api example

// function getUserData(callback) {
//   console.log("Fetching user data...");

//   setTimeout(function () {
//     const user = {
//       name: "Rahul",
//       age: 22
//     };
//     callback(user);
//   }, 2000);
// }

// function showUser(user) {
//   console.log("User Name:", user.name);
//   console.log("User Age:", user.age);
// }

// getUserData(showUser);

//task 1
// function downloadFile(callback){
//    console.log("Downloading started....");
//    setTimeout(function(){
//       console.log("download complete!!");
//       callback();
//    },2000);
// }

// function Openfile(){
//    console.log("File opened successfully..");

// };

// downloadFile(Openfile);


//task 2
 function Username(username,callback){
   setTimeout(function(){
      console.log("User logged in...");
      console.log(`welcome, ${username}`);
      callback();
   },1000);
   
 };

function Done(){
   console.log("sucesss");
}

 Username("rugved",Done);