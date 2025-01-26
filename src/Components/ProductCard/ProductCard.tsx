import "./ProductCard.scss";
import Button from "../Button/Button";

// Tipagem para as props do card
type Props = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  onBuy: () => void;
};

function ProductCard({
  productName,
  descriptionShort,
  photo,
  price,
  onBuy,
}: Props) {
  return (
    <div className="product-card">
      <img src={photo} alt={productName} className="product-photo" />
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p className="description">{descriptionShort}</p>
        <p className="price">R$ {price.toFixed(2)}</p>
      </div>
      <Button text="Comprar" className="secondary-button" onClick={onBuy} />
    </div>
  );
}

export default ProductCard;
