import { useProducts } from "../context/ProducContext"

function ProductsPage() {
  const products=useProducts();
  console.log(products);
  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage