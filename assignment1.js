// a.  Create a function using the rest operator to accept multiple numbers and return their sum.


// function sum(...numbers){
//     var sum = 0;

//     for(var int of numbers){
//         sum = sum+int;
//     }
//     return sum;
// }

// var add = sum(6, 1, 9);
// console.log(add);

// b.  Merge two arrays using the spread operator.
// var arr1 = [3, 4, 5,6];
// var arr2 = [5, 7, 2, 9];

// const arr3 = [...arr1, ...arr2]

// console.log(arr3);

// c.  Copy and update an object using the spread operator.

// const user = {
//     name : "saurabh rajput",
//     age : 20,
//     sec : "D"
// }

// const updateUser = {
//     ...user,
//     age :21
// }

// console.log(user);
// console.log("afer update");
// console.log(updateUser);

// d.  Demonstrate passing array elements as function arguments using spread.

const arr = [2, 3, 4];
function passArray(a, b, c){
    console.log(`Sum : ${a} + ${b} + ${c}`);
}

passArray(...arr);

