function bakeCake(callBack) {
    console.log("1.putting the cake in Oven");
    setTimeout(() => {
            console.log("2. Cake is Baked");
            callBack();
        },2000);
}

bakeCake(()=>{
    console.log("3 .Now i can eat the cake")
});