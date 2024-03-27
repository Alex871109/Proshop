import products from "../products"
import { useParams } from "react-router-dom"

const ProductScreen = () => {
    const {id: productId}= useParams();
        const product= products.find((p)=> p._id===productId);
        
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductScreen