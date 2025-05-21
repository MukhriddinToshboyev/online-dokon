import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.Image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} сум</p>
      <button onClick={() => addToCart(product)}>Сатып ал</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    Image: PropTypes.string.isRequired,
  }).isRequired,
};
