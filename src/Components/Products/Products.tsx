import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../../assets/icons/arrow-prev.svg";
import ArrowNext from "../../assets/icons/arrow-next.svg";

type Props = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void; 
  };
  
  function SampleNextArrow({ className, style, onClick }: Props) {
    return (
      <div
        className={className}
        style={{ ...style, cursor: "pointer" }}
        onClick={onClick}
      >
        <img src={ArrowNext} alt="Próximo" className="arrow-next"/>
      </div>
    );
  }

  function SamplePrevArrow({ className, style, onClick }: Props) {
    return (
      <div
        className={className}
        style={{ ...style, cursor: "pointer"}}
        onClick={onClick}
      >
        <img src={ArrowPrev} alt="Anterior" className="arrow-prev"/>
      </div>
    );
  }

function Products({}: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="related-products">
      <div className="container">
        <h2>Produtos relacionados</h2>
        <nav className="product-categories">
          <ul>
            <li className="active">
              <button className="categories-btn">Celular</button>
            </li>
            <li>
              <button className="categories-btn">Acessórios</button>
            </li>
            <li>
              <button className="categories-btn">Tablets</button>
            </li>
            <li>
              <button className="categories-btn">Notebooks</button>
            </li>
            <li>
              <button className="categories-btn">TVs</button>
            </li>
            <li>
              <button className="categories-btn">Ver todos</button>
            </li>
          </ul>
        </nav>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </section>
  );
}

export default Products;
