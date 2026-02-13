import { EventToDo } from './components/eventToDo.jsx'
import UserCard from './components/userCard.jsx'
import Wrapper from './components/wrapper.jsx'
import Counter from './components/Counter2.jsx'
import Calculator from './components/Calculator.jsx'
import './App.css'
import { DoSomeActivity } from './components/doSomeActivity.jsx'

export default function App() {
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
      <h1> Counter</h1>
     <Calculator/>   
    </>
  )
}




// return (
//     <>
//       <h1> User Dashboard</h1>
//       <EventToDo title="saurabh"/>
//       <DoSomeActivity/>
//       <Wrapper title="User list">
//         {
//           users.map((use, index)=>(<UserCard key={index} user = {use}/>) )
//         }
      
//       </Wrapper>
//     </>
//   )