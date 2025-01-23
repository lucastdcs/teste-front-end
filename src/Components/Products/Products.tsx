import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";

type Props = {};

function Products({}: Props) {
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
        <div className="product-slider">
         <ProductCard/>
        </div>
      </div>
    </section>
  );
}

export default Products;
