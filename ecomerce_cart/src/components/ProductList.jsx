import ProductCard from "./ProductCard.jsx";

export default function ProductList({products, addToCart}){
    return(
        <div>
            {products.map((product)=>(
                <ProductCard productC={product} key={product.id} addToCart={addToCart}></ProductCard>
))}
        </div>
    )
}


