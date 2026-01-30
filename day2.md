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



