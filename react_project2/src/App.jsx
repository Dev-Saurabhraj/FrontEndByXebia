import { EventToDo } from './components/eventToDo.jsx'
import UserCard from './components/userCard.jsx'
import Wrapper from './components/wrapper.jsx'
import './App.css'
import { DoSomeActivity } from './components/doSomeActivity.jsx'

function App() {
  const users = [
    {
    name: "Virat Kohli Sharma",
    role: "Batsman",
    country : "India"
  },
  {
    name: "MS Dhoni",
    role: "Wicket Keeper",
    country : "India"
  }

]

  return (
    <>
      <h1> User Dashboard</h1>
      <EventToDo title="saurabh"/>
      <DoSomeActivity/>
      <Wrapper title="User list">
        {
          users.map((use, index)=>(<UserCard key={index} user = {use}/>) )
        }
      
      </Wrapper>
    </>
  )
}

export default App
