import "./Header.scss";
import ShieldIcon from "../../assets/icons/shield-icon.svg";
import TruckIcon from "../../assets/icons/shield-icon.svg";
import CreditCardIcon from "../../assets/icons/shield-icon.svg";
import Logo from "../../assets/icons/Logo.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import BoxIcon from "../../assets/icons/box-icon.svg";
import HeartIcon from "../../assets/icons/heart-icon.svg";
import AccountIcon from "../../assets/icons/account-icon.svg";
import CartIcon from "../../assets/icons/cart-icon.svg";
import CrownIcon from "../../assets/icons/crown-icon.svg";


function Header() {
  return (
    <header>
      <span className="benefits">
        <div className="item">
          <img src={ShieldIcon} alt="Escudo" />
          <p>
            Compra <b>100% segura</b>
          </p>
        </div>
        <div className="item">
          <img src={TruckIcon} alt="Caminhão" />
          <p>
            <b>Frete Grátis</b> acima de R$200
          </p>
        </div>
        <div className="item">
          <img src={CreditCardIcon} alt="Cartão de Crédito" />
          <p>
            <b>Parcele</b> suas compras
          </p>
        </div>
      </span>
      <div className="header">
        <a href="">
          <img src={Logo} alt="Logo da Econverse" />
        </a>
        <section className="search-form">
          <form action="./search/">
            <label htmlFor="product">Find a Movie</label>
            <div className="input-container">
              <input
                type="search"
                id="product"
                name="q"
                placeholder="O que você está buscando?"
              />
              <button type="submit">
                <img src={SearchIcon} alt="Lupa" />
              </button>
            </div>
          </form>
        </section>
        <nav aria-label="Navegação principal" className="nav-principal">
            <ul>
                <li>
                    <a href="">
                        <img src={BoxIcon} alt="Caixa de Papelão"/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={HeartIcon} alt="Coração" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={AccountIcon} alt="Perfil" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={CartIcon} alt="Carrinho" />
                    </a>
                </li>
            </ul>
        </nav>
      </div>
        <nav aria-label="Navegação de Categorias" className="nav-categories">
            <ul>
                <li>Todas as categorias</li>
                <li>Supermercado</li>
                <li>Livros</li>
                <li>Moda</li>
                <li>lançamentos</li>
                <li>ofertas do dia</li>
                <li>
                    <img src={CrownIcon} alt="Coroa"/>
                    assinatura
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
