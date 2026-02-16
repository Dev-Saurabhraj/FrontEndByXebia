## call back basics 
```js
function greet(){
    console.log("heello")
}

function execute(fn){
    fn(greet)
}
```