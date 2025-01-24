import "./ProductsCarousel.scss";
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

function ProductsCarousel({}: Props) {
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
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
  );
}

export default ProductsCarousel;
