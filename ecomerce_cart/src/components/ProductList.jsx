import ProductCart from "./ProductCard.jsx";

export default function ProductList({products}){
    return(
        <div>
            {products.map((product)=>{
                <ProductCart productC={product} key={product.id} addToCart={addToCart}></ProductCart>

            })}
        </div>
    )
}

