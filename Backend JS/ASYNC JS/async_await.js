//ASYNC/AWAIT

//async / await is a cleaner way to write Promise-based asynchronous code that looks like synchronous code.
//async / await does NOT replace Promises It is just syntax built on top of Promises



// example 1

// function wait(){
//     return new Promise(resolve=>{
// setTimeout(()=>{
//     resolve("Done waiting");
// },2000);        
//     });
// }
// async function run() {
//     const result= await wait();
//     console.log(result);
    
// }
// run();

//example 2

// function delay(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("Middle")
//         },2000);
//     });
// }


// async function test(){
//     console.log("start");
//     const msg= await delay();
//     console.log(msg);
//     console.log("End");
// }

// test();

//example 3
// async function giveNumber(){
//     return 10;
// }
// giveNumber().then(num=> console.log(num));

//example 4
// function step1(){
//     return new Promise(resolve=>
//         setTimeout(()=> resolve("step 1 done"),1000)
//     );
// }
// function step2() {
//   return new Promise(resolve =>
//     setTimeout(() => resolve("Step 2 done"), 1000)
//   );
// }

// async function process(){
//     const a= await step1();
//     console.log(a);
//     const b=await step2();
//     console.log(b);
// }
// process();



//example 5 (try/catch)

// function login(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       username ? resolve("Welcome") : reject("No username");
//     }, 1000);
//   });
// }

// async function app() {
//     try{
//         const msg= await login("");
//         console.log(msg);
//     }
//     catch(err){
//         console.log("Error:",err);
//     }
    
// }
// app();