## difference between var , let and const in java script
- three things to keep in mind is hoisting, mutability and scope.
- hoisting means using a variable before its delaration 
- const is immutable and var and let are not.
- var has vast scope 
- let has block scoped 
- const can not be updated or re assigned 
## data types 
```js
let a = 20;
let str = "hello";
let isok = true;
let arr = [1, 2, 3];
let obj = {name: "Dennis", age:20};
let empty = null;
let b;
```
-- object is a universal data type that can be converted in to any data type 
-- thats why b is object because we have give any data type or thing so that it can be converted in to that. that's why it is null  

```js
console.log(typeof(a))
console.log(typeof(str))
console.log(typeof(isok))
console.log(typeof(arr)) it is array object data type 
console.log(typeof(obj))
console.log(typeof(empty));
console.log(typeof(b))

number
string
boolean
object
object
object
undefined
```

- equality operator 
```js
console.log(5=='5')
```
- it is called equality operater it does not check that what is data type it only checks if value is equal or not 
```js
console.log(5==='5')
```
- it check both value and data type so it will be false

# for each loop in java script
```js 
arr = [2, 3, 4, 5,6];
 arr.forEach((element)=>console.log(element));
 ```
# difference between argument and parameter
 - argument are passed in function as
 ```bash
 greet(a, b) 
 ``` 
 - where a and b are argument 

 - paramater are defined in function 

 ### here a and b is parameter
 ```js
 greet(a, b){
    return a+b;
 }
 ```
 ## rest parameter
```js
function funt(a, ...b){ 
    console.log(a);
    console.log(b);
}
funt(1, 2,3,4, 5, 6)

```
### output
```bash
1
[ 2, 3, 4, 5, 6 ]
```




 -A rest parameter must be last in a parameter list.
 - syntext error 
  - (...a, b),
  - (a, ...b, ...c)
```js
  const arr = [10,20,30]
const arr1 = [10,20,50]

const finalArr = [...arr,...arr1] //spread operator

const [a,b,c] = arr //destructuring of array
console.log(a+ b + c);
console.log(finalArr);

const [x,...y] = arr1 //destructuring of array with rest operator
console.log(y);

const myobj = {
  name: "Abc",
  age:20,
  key:"pqr"
}
let duplicateObj = myobj
let obj = {...myobj,age :21}
//console.log(obj);
console.log(duplicateObj);'
```