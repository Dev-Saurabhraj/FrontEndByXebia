arr = [2, 4, 3, 1, 5, 6, 7]
for(var i = 0 ; i< arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
    
}

arr.forEach((element)=>{if(element%2==0){console.log(element)}
})