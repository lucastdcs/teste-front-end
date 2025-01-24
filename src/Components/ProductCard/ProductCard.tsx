import "./ProductCard.scss";
import Button from "../Button/Button";

type Props = {};

function ProductCard({}: Props) {

  return (
    <div className="product-card">
   
      <img
        src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
        alt=""
      />
        <div className="product-info">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="old-price">R$30,90 </p>
          <p className="new-price">R$28,90 </p>
          <p className="payment-description">ou 2x de R$49,95 sem juros</p>
          <p className="free-shipping">Frete grátis</p>
        </div>
    
      <Button text="Comprar" className="secondary-button" />
    </div>
  );
}

export default ProductCard;
