let myobj = {
    name: "abc",
    age: 5,
    key :  "key"
}

 
let {name, age, key} = myobj;

console.log(name);
console.log(age);
console.log(key);


let duplicate = {...myobj, key : "mykey", age :20,};

let {name:myname, age:myage, key:mykey} = duplicate;

console.log(myname);
console.log(myage);
console.log(mykey);

console.log(duplicate)


console.log(`hello class,
how are you?`)