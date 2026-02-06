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

 

