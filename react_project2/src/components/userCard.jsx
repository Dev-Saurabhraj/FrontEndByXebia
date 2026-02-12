import './userCard.css'
export default function UserCard({user}){
    return (<div id='usercard'>
        <h1>Name : {user.name}</h1>
        <p>Role : {user.role}</p>
        <p>Country : {user.country}</p>
    </div>)
}