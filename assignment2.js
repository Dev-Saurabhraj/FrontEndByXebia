// 1. Print student(Object) details (name, roll, marks) using template literals.
const student = {name :"saurabh raput", roll :"2400290100280", marks: "100"}

console.log(`name : ${student.name}, roll : ${student.roll} , marks : ${student.marks}`);

// // 2. Write a function that accepts any number of arguments and returns their average.
function average(...numbers){
    var sum = 0;
    var count = 0;
    for(var int of numbers){
        sum = sum+int;
        count++;
    }
    return sum/count;
}

var ans = average(6, 1, 9);
console.log(ans);

// // 3. Use rest operator to separate one value from remaining array elements.
const arr = [3, 4,5,6];

const  [a, ...b] = arr;

console.log(a);
console.log(b);


// // 4. Demonstrate rest operator in object destructuring.
student = {name :"saurabh raput", roll :"2400290100280", marks: "100"}
const {names, ...rollmarks} = student; 

console.log(names);
console.log(rollmarks);


// // 5. Merge two arrays using spread operator.

var arr1 = [3, 4, 5,6];
var arr2 = [5, 7, 2, 9];

const arr3 = [...arr1, ...arr2]

console.log(arr3);

// // 6. Copy an object and override one property.
student = {name :"saurabh raput", roll :"2400290100280", marks: "100"}
console.log(student.name)
student.name = "saurabh raj"
console.log(student.name);

// // 7. Add new elements to an array without modifying the original array.

const list = [3, 4, 5,6, 6, 3]

list.add(8);
console.log(list)

// // 8 .Create an object student with properties name and roll.
student = {name :"saurabh raput", roll :"2400290100280", marks: "100"}

function display({name, roll , marks}){
    console.log(`name : ${name}, roll : ${roll} , marks : ${marks}`);
}


// // Add a method display() using a normal function

// // Print the value of this.name

// // 9. Modify the display() method to use an arrow function instead of a normal function.
student = {name :"saurabh raput", roll :"2400290100280", marks: "100"}

let display=({name})=>`hello ${name}`;

// // Print this.name

// // Compare the output with Task 1

