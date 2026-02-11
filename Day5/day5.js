// function bakeCake(callBack) {
//     console.log("1.putting the cake in Oven");
//     setTimeout(() => {
//             console.log("2. Cake is Baked");
//             callBack();
//         },2000);
// }

// bakeCake(()=>{
//     console.log("3 .Now i can eat the cake")
// });


function bakeCake(){
    return new Promise((resolve, reject)=>{
        console.log('!.putting the cake inoven');
setTimeout(()=>{
    let success = true;
    if(success){
        resolve('2. Cake is Baked');
    }else{
        reject(`2. Cake is burned`)
    }

}, 2000)
    })
}


// bakeCake().then((msg)=>{
// console.log(`msg :${msg}`);
// console.log("now u can eat the cake")
// }).catch((err)=>{
//     console.log(`msg : ${err}`);
//     console.log(`3.Now you can not eat the cake`)
// })

async function party(){
console.log("1. start baking the cake")
}

try{
   const cake =  await bakeCake();
   console.log(`cake : ${cake}`)
    party();
}catch(error){
    console.log("errror : "+error)
}

