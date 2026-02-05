## ques - 1 : write a script to print even elements prsent in an array 

### 1. using for loop 
```js
arr = [2, 4, 3, 1, 5, 6, 7]
for(var i = 0 ; i< arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
    
}
```
output 
```bash
    2, 4, 6
```

### using for each function 

```js
arr = [2, 4, 3, 1, 5, 6, 7]
arr.forEach((element)=>{if(element%2==0){console.log(element)}
})

```
output 
```bash
    2, 4, 6
```

# 2. object
```js
    const obj = {name: "dennis" }
    obj.name = "ritchie";
```
output 
```bash
    ritchie
```
- we can change the value of key not the key
- we are not reassigning the value of key 

## string interpolation  or backtick
- it can also be usage as text block like in java and html pretag
```js
function greet(name){
    console.log(`hello ${name}`)
}
greet("saurabh")

//using as text block
console.log(`hello class,
how are you?`)
```
output 
```bash
hello saurabh

hello class,
how are you?
```

## Function Expression

hoisting 

```js
    const factorial = function(n){
        if(n==1||n==0){
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
    }
    console.log(factorial);
    console.log(factorial(5));
```
output 
```bash
    [Function : factorial] 
    120
```

```js
let myobj =()=>{name:'abc'}
console.log(myobj()) 

//fix
let myobj =()=>({name:'abc'})
console.log(myobj()) 

```
output 
```bash
    undefine

    {name: "abc"}

```

### write any function using function expression or convention function 
```js
function addTwoNumbers(a, b){
    return a+b;
}

console.log(`Addition : ${addTwoNumbers(4, 5)}`)

const multiply = function(a, b){
    return a*b;
}
console.log(`Multiplication : ${multiply(4, 5)}`)
```
output 
```bash
    Addition : 9
    Multiplication : 20
```

### a another way of defining function
```js
let name = "saurabh"
let greet=name=>`hello ${name}`; // hello saurabh
```
### a another way of defining function
```js
let x =10;
let sum=(x, y=50)=>{
    let result =  x+y;
    return result;
}
sum(x) / 70
```
# Object

```js
const sales = "Toyota";
function Types(name){
    return name==="Honda"? name:"Sorry";
}

const car = {mycar: "saturn", getcar: Types("Honda"), special: sales};

console.log(car.mycar)
console.log(car.getcar);
console.log(car.special);
```

output 
```bash
    saturn
    Honda
    Toyota
```
### function does not consider this.age so it is not int the scope of function and only arrow funciton can only use 'this' key word.

```js
function person(){
    this.age = 10;
    setTimeout(function(){
        console.log(this.age);
    }, 1000);
}
new person();

```
```bash
undefined
```

### fix version of uppper case
```js
function person(){
    this.age = 10;
    setTimeout(()=>{
        console.log(this.age);
    }, 1000);
}
new person();

```
```bash
10
```



```js
const student = {name: "Rom", age : 21, hobby: "cricket"}

for(key in student){
    console.log(key.student);
}
```
output 
```bash
    undefined
    undefined
    undefined
```
## object key and value
```js
const student = {name: "Rom", age : 21, hobby: "cricket"}

for(key in student){
    console.log(key); // fory value use student[key];
}
```
output 
```bash
    name
    age
    hobby
```
## (for in) and (for of)

### for in used for index
```js
const fruits = ["Apple", "banana", "mango"];
for(var i in fruits){
    console.log(i)
}
```
output 
```bash
0
1
2
```


### for of used for value 

```js
const fruits = ["Apple", "banana", "mango"];

for(var i of fruits){
    console.log(i)
}
```
output 
```bash
Apple
banana
mango
```
## write a script to count vowel in "javascript"

```js
var vowelCount = 0;
for(char c of "javascript"){
    if(c==='a'|| c==='e'||c==='i'|| c==='o'|| c==='u'){
        vowelCount++;
    }
}
console.log(vowelCount)
```
output
```bash
3
```
```js
const colors = ["red", "yellow", "blue"];
for(const[index, color] of colors.entries()){ // type of colors.entries() is Object [Array Iterator] {}
    console.log(index, color)
}
```
output
```bash
0 red
1 yellow
2 blue
```


