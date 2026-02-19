// student = {name :"saurabh raput", roll :"2400290100280", marks: "100"}

// let display=({name})=>console.log(`hello ${name}`);

// display(student);


function bakeCake(){
    return new Promise((resolve, reject)=>{
        console.log('1. putting the cake inoven');
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


bakeCake().then((msg)=>{
console.log(`msg :${msg}`);
console.log("now u can eat the cake")
}).catch((err)=>{
    console.log(`msg : ${err}`);
    console.log(`3.Now you can not eat the cake`)
})