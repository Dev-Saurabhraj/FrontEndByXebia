import { useState } from "react";
export default function Search(){
    const [find, setFind] = useState("");
    const name = ["Dennish", "ritchie", "Paul", "Frank", "prashant", "saurya", "paarth", "saksham", "rohit", "kamalkant", "cold play", "honey Singh", "mohit tanwar", "sunidhi chuhan"];
    const student = name.filter((name)=>name.toLowerCase().includes(find.toLowerCase()));
    return (<>
    <div>
        <h2> Demo to show search</h2>
        <input type="text"
        placeholder="Enter key to search" 
        value={find}
        onChange={(e)=>setFind(e.target.value)}
        />
        <ul>
            {student.map((item, index)=>(<li key={index}>{item}</li>))}
        </ul>
    </div>
    </>)
}