
// three things to keep in mind is hoisting, mutability and scope.
// hoisting means using a variable before its delaration 
//const is immutable and var and let are not.
// var has vast scope 
// let has block scoped 
// const can not be updated or re assigned 


let a = 20;
let str = "hello";
let isok = true;
let arr = [1, 2, 3];
let obj = {name: "Dennis", age:20};
let empty = null;
let b;

console.log(typeof(a))
console.log(typeof(str))
console.log(typeof(isok))
console.log(typeof(arr))
console.log(typeof(obj))
console.log(typeof(empty));
console.log(typeof(b))


// type check 

console.log(5=='5') // it is called equality operater it does not check that what is data type it only checks if value is equal or not 
console.log(5==='5') // it check both value and data type so it will be false