import './event.css'
import './taskList.css'
import './textBox.css'
export function EventToDo(props){

    function handleClick(){
        alert(`hello ${props.title}`);
    }

    function handleSubmit(e){
        e.preventDefault();
         const input = e.target.task.value.trim();
        console.log(input)
        const taskValue = input.trim();
        if(taskValue===""){
            alert("cona not add empty task");
            return;
        }
        const li = document.createElement("li");
        li.innerHTML=`<span>${taskValue}</span>
        <button class="deleteBtn">Delete </button>`;
        document.getElementById("taskList").appendChild(li);

    }
    function handleListClick(e){
        if(e.target.className==="deleteBtn"){
            e.target.parentElement.remove();
        }

    }
    return(<div>
        <h1 id="eventButton">Event Handling</h1>
        <button onClick={handleClick}>Click Me</button>
        <h1>TO DO List</h1>
        <form onSubmit={handleSubmit}>
            <input id='textBox' type='text' name='task' placeholder='Enter task'/>
            <button type='submit' > Add task </button>
        </form>
        <ul id='taskList'onClick={handleListClick}></ul>

    </div>);
}