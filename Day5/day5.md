# componentprop

App.jsx
```js
import './App.css'// it is not returning nothing because css does not return anything 
import {Header} from "./component/Header.jsx" // 'from' keyword is used because hearder is reutrning something
import {Footer} from "./component/Footer.jsx"
export default function App() {
  const y = [2025, 2026, 2028];
  const person = {name:"saurabh", age:"21"}
  return (
    <>
    <Header title="my first react app" />
    <Header title="this is getting very interesting" />
    
  <h1>
    welcome to my first react App.
  </h1>
    <Footer year={y} college={person}/>
    </>
  )
}


```

Header.jsx
```js
 import './Header.css'
 export function Header(props){
    return(
        <>
        <h2 id='heading'>
            {props.title}
        </h2>
        <nav className='navigation'>
        <a href='#'>Home</a>
        <a href="#" >contact us </a>
        <a href='#'>About Us</a>
        </nav>
        </>
        
    )
}
```

Footer.jsx
```js
export function Footer(props){
    return(
        <footer>
            <p> {props.year[2]} {props.college.name}</p>
        </footer>
    )
}
```

- if index of array is not givern it will print whole array 
- if it is object and you have note give a specific property it will giver error
 - so use props.college.name



 ## then and catch int Javascript

 - example:
```js
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
```
- output:
```bash
1. putting the cake inoven
msg :2. Cake is Baked
now u can eat the cake
```

 

