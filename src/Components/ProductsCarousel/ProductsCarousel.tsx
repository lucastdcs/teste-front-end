import "./ProductsCarousel.scss";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../../assets/icons/arrow-prev.svg";
import ArrowNext from "../../assets/icons/arrow-next.svg";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Button from "../Button/Button";

// Tipagem do produto
type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

function SampleNextArrow({ className, style, onClick }: any) {
  return (
    <div
      className={className}
      style={{ ...style, cursor: "pointer" }}
      onClick={onClick}
    >
      <img src={ArrowNext} alt="Próximo" className="arrow-next" />
    </div>
  );
}

function SamplePrevArrow({ className, style, onClick }: any) {
  return (
    <div
      className={className}
      style={{ ...style, cursor: "pointer" }}
      onClick={onClick}
    >
      <img src={ArrowPrev} alt="Anterior" className="arrow-prev" />
    </div>
  );
}

function ProductsCarousel() {
  const [products, setProducts] = useState<Product[]>([]);

  // Busca os dados do JSON local
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data/produtos.json"); // JSON salvo em public/data/products.json
        const data = await response.json();
        setProducts(data.products); // Atualiza o estado com os produtos
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  // Configuração do slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    console.log("Abrindo modal com produto:", product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard
              productName={product.productName}
              descriptionShort={product.descriptionShort}
              photo={product.photo}
              price={product.price}
              onBuy={() => handleOpenModal(product)}
            />
          </div>
        ))}
      </Slider>

      {/* Modal de produto */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Detalhes do Produto"
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedProduct && (
          <div className="modal-content">
            <img
              src={selectedProduct.photo}
              alt={selectedProduct.productName}
              className="product-photo"
            />
            <div className="content-wrapper">
              <h2 className="modal-content-title">{selectedProduct.productName}</h2>
              <p className="price">R$ {selectedProduct.price.toFixed(2)}</p>
              <p className="modal-description">{selectedProduct.descriptionShort}</p>
              <a href="" className="modal-link">Veja mais detalhes do produto &gt;</a>
              <Button text="COMPRAR"/>
            </div>
              <button onClick={handleCloseModal} className="close">X</button>
          </div>
        )}
      </ReactModal>
    </>
  );
}

export default ProductsCarousel;
