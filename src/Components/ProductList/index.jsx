import products from "../../products"

export default function ProductList( ) {

   return (
        <div className="products">
             {products.map((product) => (
                <ProductCard key={product.id} product={product} />
             ))}
        </div>
   )