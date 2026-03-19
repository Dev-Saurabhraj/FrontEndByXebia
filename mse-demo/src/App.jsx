import { useEffect, useState } from 'react'
import  Card  from './Card.jsx';
import axios from 'axios';

function App() {
  const [todoList , setList] = useState([]);
  const [task , setTask] = useState("");

  function addTask(){
    if(task.trim() === "") return alert("Enter a value");
    const t = { id: Date.now(), name : task, completed : false};
    setList([...todoList, t]);
    setTask("");
    console.log(todoList);
  }

  function deleteTask(id){
    const newList = todoList.filter((task)=>task.id!==id);
    setList(newList);
  }

  function toggleStatus(id){
    const newList = todoList.map((todo)=>{if(todo.id===id){
      return {...todo, completed: !todo.completed};
  }

  return todo;
  
  })
    setList(newList);
  }


const [data, setData] = useState([]);


  useEffect(()=>{
    axios.get("http://jsonplaceholder.typicode.com/users")
    .then(response=>setData(response.data)).catch(error => console.log(error));

  }, [])
  return (
  <div>
    <input value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addTask}>Add to task list </button>
    <ul>
      {
        todoList.map((todo)=>(
          <li key={todo.id} style={{ textDecoration : todo.completed ? 'line-through' : 'none' }}>
          <span onClick={()=> {toggleStatus(todo.id)}}>{todo.name}</span>
          <button onClick={()=>{deleteTask(todo.id)}} style={{marginLeft : '10px'}}>Delete task</button>
          </li>
        )
        )
      }
    </ul>
    <div>
      <Card discription = "item is very unique./" id="12">
      </Card>
    </div>

    <div>
      <h1>Fetch api</h1>
      <ul>
      {data.map((data)=>(

        <li key={data.id} > {data.name}</li>
        
      )
      )}
      </ul>
    </div>
  </div>
  )
}
export default App
