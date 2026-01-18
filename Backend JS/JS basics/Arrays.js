// let arr=[1,2,3,4,5,6,7];

// arr[2]=36;
// arr.push(59); //add at end
// arr.unshift(49)//add at beginning
// console.log(arr);

// arr.pop(); //remove last
// arr.shift(); //remove first

// // array Iteration

// let doubleArr=arr.map(arr=> arr*2);

// console.log(doubleArr);

// //filter
// let evennum= arr.filter(num=> num%2==0);
// // let evennum= arr.filter(function(num) {
// //     return num%2==0});
// console.log(evennum)

// reduce
// let nums=[10,20,40];
// let sum = nums.reduce((total,num)=>{
//     return total +num;
// },0)
// console.log(sum);

//cart

let cart=[200,500,300];

let totalBill=cart.reduce((sum,price)=>sum+price,0);
console.log(totalBill)

let arr=[{Name:"Rugved",Marks:75},
    {Name:"Dhanashree",Marks:60},
    {Name:"Rajul",Marks:80}

];

let top=arr.filter(arr=>arr.Marks>70

);
console.log(top);
let names=arr.map(arr=> arr.Name);
console.log(names);