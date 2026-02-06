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

