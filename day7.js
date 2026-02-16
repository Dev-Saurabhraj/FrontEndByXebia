function greet(){
    console.log("heello")
}

function execute(fn){
    fn(greet)
}

execute(greet);


const array = [1, 2, 3, 4, 5,6 ]

 let newArray = array.map(function(n){
    return n*2;

})

console.log(newArray)
