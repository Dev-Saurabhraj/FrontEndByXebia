import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserCard from './components/userCard.jsx'
import Wrapper from './components/wrapper.jsx'
import './App.css'

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
      <Wrapper title="User list">
        {
          users.map((use, index)=>(<UserCard key={index} user = {use}/>) )
        }
      
      </Wrapper>
    </>
  )
}

export default App
