// What is a Promise?

// 📌 A Promise represents a future value

// Promise has 3 states:

// Pending

// Fulfilled

// Rejected

//creating our first promise from scratch

// let promise = new Promise((resolve,reject)=>{
//     //async task here
// })




//example1
// let promise= new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Operation successful");
//     }

//     else{
//         reject("operation failed");
//     }
// });

// //consuming a promise
// promise
// .then(result=>{  //then==> success handler
//     console.log(result);
// })
// .catch(error=>{ //catch==> error handler
//     console.log(error);
// });


// //example2
// let orderFood= new Promise((resolve,reject)=>{
//     console.log("Order placed");

//     setTimeout(()=>{
//         resolve("food delivered");
//     },3000);

// });


// orderFood
// .then(result=>console.log(result));

//example3
// let loginUser= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"Rugved", age:21})
//     },2000);
// });

// loginUser
// .then(user=>{
//     console.log("welcome", user.name);
// });

// Real-Life Example (Login Flow)
// function login(username){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             username? resolve(username): reject("NO username")
//         },2000);
//     });
// }

// function getProfile(user) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ user, role: "admin" });
//     }, 1000);
//   });
// }

// login("Rugved")
// .then(getProfile)
// .then(profile=>console.log(profile))
// .catch(err=> console.log(err));


// const alarm= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("wake up");
//   },3000);
// });

// alarm
// .then(msg=> console.log(msg));

// const studyTime= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("It's time to study!!")
//   },3000);
// });


// studyTime
// .then(timeup=>console.log(timeup));

// function placeOrder(foodavailable){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       foodavailable 
//       ? resolve("Food delivered"): reject("Out of stock");
//     },2000);
//   });
// }


// placeOrder(true)
// .then(msg=>console.log(msg))
// .catch(err=> console.log(err));


//exmaple 3

 function getMarks(){
  return new Promise(resolve=>{
    setTimeout(()=> resolve(85),1000);
  });
 }

 function calculateGrade(marks){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(marks >= 80 ? "A" : "B");
    },1000);
  });
 }


 getMarks()
 .then(calculateGrade)
 .then(grade=> console.log("Grade:", grade));