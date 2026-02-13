import './button.css'
import { useState } from 'react';
export default function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count=>count+1)
    }
    function decrement(){
        setCount(count=>count-1)
    }

    return(
        <>
        <h3>Count : {count}</h3>

        <button id='Btn' onClick={increment}>inc</button>

        <button id="Btn" onClick={decrement}>dec</button>
        
        </>
    )
}