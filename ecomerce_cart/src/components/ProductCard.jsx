export default function ProductCart({productC, addToCart}){

    
    return(
        <div>
            <img src={productC.photoUrl} alt={productC.name}/>
            <h4>{productC.name}</h4>
            <p>{productC.price}</p>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        
        </div>
    )
}