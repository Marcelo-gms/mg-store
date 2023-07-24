import { Link } from "react-router-dom";
import * as C from "./CardProductStyles";

const CardProduct = ({ product }) => {
  return (
    <C.CardProduct>
      <Link to={`/product/${product.id}`}>
        <C.CardImage imageurl={product && product.image} />

        <C.boxDescription>
          <p>{product.title}</p>
          <p>R$ {product.price}</p>
        </C.boxDescription>
      </Link>
    </C.CardProduct>
  );
};

export default CardProduct;
