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