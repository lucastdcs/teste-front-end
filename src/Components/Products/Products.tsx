import "./Products.scss";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import PartnersCard from "../PartnersCard/PartnersCard";

type Props = {
  seeAll?: boolean;
};
function Products({ seeAll }: Props) {
  const categories = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs"];
  return (
    <section className="related-products">
      <div className="container">
        <h2 className="products-title">Produtos relacionados</h2>
        {seeAll ? (
          <a href="/" className="see-all-link">
            Ver todos
          </a>
        ) : (
          <nav className="product-categories">
            <ul>
              {categories.map((category, index) => (
                <li key={index} className={index === 0 ? "active" : ""}>
                  <button
                    className="categories-btn"
                    aria-label={`Categoria ${category}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
              <li>
                <button className="categories-btn" aria-label="Ver todos">
                  Ver todos
                </button>
              </li>
            </ul>
          </nav>
        )}

        <ProductsCarousel />
        <PartnersCard />
      </div>
    </section>
  );
}

export default Products;
