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

## string interpolation 
```js
function greet(name){
    console.log(`hello ${name}`)
}
greet("saurabh")
```
output 
```bash
    hello saurabh
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



