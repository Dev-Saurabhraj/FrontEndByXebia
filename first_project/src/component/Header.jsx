 import './Header.css'
 export function Header({title,color, year} , card){
    return (
        <>
        <h2 id='heading'>
            {title} {color} {year} 
            {card}
        </h2>
        
        <nav className='navigation'>
        <a href='#'> home</a>
        <a href="#" >contact us </a>
        <a href='#'>About Us</a>
        </nav>
        </>
        
    )
}