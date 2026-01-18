// let student = {
//   name: "Rugved",
//   age: 21,
//   course: "Computer Science"
// };

// console.log(student.name);
// console.log(student.age);
// student.age=23;
// console.log(student.age);
// student.city="buldana";


// let user= {
//     name:"Rugved",
//     hello: function(){ //methods , functions inside object
//         console.log("hello " + this.name)

//     }
// };
// user.hello();

let users =[
    {id :1 , name :"Rugved", age:20},
    {id :2 , name :"ved", age:16},
    {id :3 , name :"Rug", age:25} //arrays of objects
];

let adults=users.filter(user=> user.age>=18);
console.log(adults)

let names= users.map(user=>user.name) //map
console.log(names);