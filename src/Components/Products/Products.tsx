import "./Products.scss";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import PartnersCard from "../PartnersCard/PartnersCard";

type Props ={};
function Products({}: Props) {

  return (
    <section className="related-products">
      <div className="container">
        <h2 className="products-title">Produtos relacionados</h2>
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
        <ProductsCarousel/>
        <PartnersCard/>
      </div>
    </section>
  );
}

export default Products;
