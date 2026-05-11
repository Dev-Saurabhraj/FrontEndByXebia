// console.log("begining")
// function getData(callback){

//     setTimeout(()=>{console.log("Data initiated")}, 2000)
// }


// let promise = new Promise((resolve, reject)=>{
//     let success = true;
//     if(success){
//         return resolve("hello resolve")
//     }else{
//         return reject("rejected")
//     }
// } 
// )


const data = await fetch("http://jsonplaceholder.typicode.com/users").then(
    response=>response.json()
).then(
data=>  
data.forEach(user=>console.log(user.name)))
.catch(
    error=>console.log(error)
)

// console.log(data);
// console.log(promise);
// console.log("End");