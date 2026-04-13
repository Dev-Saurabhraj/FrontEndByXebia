import './imageProductCard.css'
export default function ProductCard({productC, addToCart}){
    
    return(
        <div id='productCardDiv'>
            <img id="productimg"src={productC.photoUrl} alt={productC.name}/>
            <h4>{productC.name}</h4>
            <p>{productC.price}</p>
            <button onClick={()=>addToCart(productC)}>Add to Cart</button>
        </div>
    )
}