// arr = [2, 4, 3, 1, 5, 6, 7]
// for(var i = 0 ; i< arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
    
// }

// arr.forEach((element)=>{if(element%2==0){console.log(element)}
// })


// function addTwoNumbers(a, b){
//     return a+b;
// }

// console.log(`Addition : ${addTwoNumbers(4, 5)}`)

// const multiply = function(a, b){
//     return a*b;
// }
// console.log(`Multiplication : ${multiply(4, 5)}`)


// const sales = "Toyota";
// function Types(name){
//     return name==="Honda"? name:"Sorry";
// }

// const car = {mycar: "saturn", getcar: Types("Honda"), special: sales};

// console.log(car.mycar)
// console.log(car.getcar);
// console.log(car.special);

// const student = {name: "Rom", age : 21, hobby: "cricket"}

// for(key in student){
//     console.log(key.student);
// }


// arr = [3, 4, 5, 6, 2, 6,7];
// const fruits = ["Apple", "banana", "mango"];
// for(var i of fruits){
//     console.log(i)
// }

// var vowelCount = 0
// for(const c of "javascript"){
//     if(c==='a'|| c==='e'||c==='i'|| c==='o'|| c==='u'){
//         vowelCount++;
//     }
// }
// console.log(vowelCount)

// const colors = ["red", "yellow", "blue"];
// // for(const[index, color] of colors.entries()){
// //     console.log(index, color)
// // }
// console.log(colors.entries())

function person(){
    let age = 10;
    setTimeout(function(){
        console.log(age);
    }, 1000);
}
new person();