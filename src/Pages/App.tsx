import "./App.scss";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
import Products from "../Components/Products/Products";
import Footer from "../Components/Footer/Footer";
import TechIcon from "../assets/icons/categories/tech-icon.svg";
import SupermarketIcon from "../assets/icons/categories/supermarket-icon.svg";
import BeveragetIcon from "../assets/icons/categories/beverage-icon.svg";
import ToolsIcon from "../assets/icons/categories/tools-icon.svg";
import HealthCareIcon from "../assets/icons/categories/health-care-icon.svg";
import SportsIcon from "../assets/icons/categories/sports-icon.svg";
import FashionIcon from "../assets/icons/categories/fashion-icon.svg";
import Logo from "../assets/icons/Logo.svg"

function App() {
  return (
    <>
      <Header />
      <main>
        <section aria-labelledby="promocoes">
          <div className="hero">
            <div className="hero-content">
              <h1>Venha conhecer nossas promoções</h1>
              <p>
                <strong>50% Off</strong> nos produtos
              </p>
              <Button text="Ver produto" className="" />
            </div>
          </div>
        </section>
        <section id="categories" aria-labelledby="categorias-title">
          <h2 id="categorias-title">Categorias</h2>
          <ul className="categories-list">
            <li>
              <a href="#tecnologia">
                <div className="categorie-card">
                  <img src={TechIcon} alt="Ícone de tecnologia" />
                </div>
                <span>Tecnologia</span>
              </a>
            </li>
            <li>
              <a href="#supermercado">
                <div className="categorie-card">
                  <img src={SupermarketIcon} alt="Ícone de supermercado" />
                </div>
                <span>Supermercado</span>
              </a>
            </li>
            <li>
              <a href="#bebidas">
                <div className="categorie-card">
                  <img src={BeveragetIcon} alt="Ícone de bebidas" />
                </div>
                <span>Bebidas</span>
              </a>
            </li>
            <li>
              <a href="#ferramentas">
                <div className="categorie-card">
                  <img src={ToolsIcon} alt="Ícone de ferramentas" />
                </div>
                <span>Ferramentas</span>
              </a>
            </li>
            <li>
              <a href="#saude">
                <div className="categorie-card">
                  <img src={HealthCareIcon} alt="Ícone de saúde" />
                </div>
                <span>Saúde</span>
              </a>
            </li>
            <li>
              <a href="#esporte">
                <div className="categorie-card">
                  <img src={SportsIcon} alt="Ícone de esportes" />
                </div>
                <span>Esportes e Fitness</span>
              </a>
            </li>
            <li>
              <a href="#moda">
                <div className="categorie-card">
                  <img src={FashionIcon} alt="Ícone de moda" />
                </div>
                <span>Moda</span>
              </a>
            </li>
          </ul>
        </section>
        <Products partners/>
        <Products seeAll partners/>
        <section aria-labelledby="brands" id="brands">
          <h2 className="brands-title">Navegue por marcas</h2>
          <ul className="brands-list">
            <li className="brand"><img src={Logo} alt="Econverse Logo" /></li>
            <li className="brand"><img src={Logo} alt="Econverse Logo" /></li>
            <li className="brand"><img src={Logo} alt="Econverse Logo" /></li>
            <li className="brand"><img src={Logo} alt="Econverse Logo" /></li>
            <li className="brand"><img src={Logo} alt="Econverse Logo" /></li>
          </ul>
        </section>
        <Products seeAll/>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
