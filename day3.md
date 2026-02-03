 ## rest operator in java script
 ### if rest operator is after myobj
 ```js
 let myobj = {
    name: "abc",
    age: 5,
    key :  "key"
}
console.log(myobj);
 


let duplicate = {...myobj, key : "mykey"};
//{ name: 'abc', age: 5, key: 'mykey' }

// let duplicate = { key : "mykey", ...myobj};
// { key: 'key', name: 'abc', age: 5 }

console.log(duplicate)
```
```bash
{ name: 'abc', age: 5, key: 'mykey' }
```


### if rest operator is before myobj(in start position)
```js
 let myobj = {
    name: "abc",
    age: 5,
    key :  "key"
}
console.log(myobj);

let duplicate = { key : "mykey", ...myobj};


console.log(duplicate)
```
```bash
{ key: 'key', name: 'abc', age: 5 }
```

## destructuring of object

```js
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
/// 
console.log(myname);
console.log(myage);
console.log(mykey);

console.log(duplicate)
```
```bash
abc
5
key
abc
20
mykey
{ name: 'abc', age: 20, key: 'mykey' }
```
- in this we have used alisa in destructuring because we cannot reintialize same variable twice 