import "./Footer.scss";
import Button from "../Button/Button";
import Logo from "../../assets/icons/Logo.svg";
import InstaLogo from "../../assets/icons/social-media/instagram-icon.svg";
import FaceLogo from "../../assets/icons/social-media/facebook-icon.svg";
import LinkedInLogo from "../../assets/icons/social-media/linkedin-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-text-wrapper">
            <h2 className="newsletter-title">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="newsletter-description">
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>
          <form className="newsletter-form">
            <div className="input-group">
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <Button typeBtn="submit" className="tertiary-button" text="INSCREVER"/>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </section>

      <section className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Econverse" />
          <p className="footer-content-text">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
          <div className="social-icons">
            <a href="#!">
              <img src={InstaLogo} alt="Instagram" />
            </a>
            <a href="#!">
              <img src={FaceLogo} alt="Facebook" />
            </a>
            <a href="#!">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Institucional</h3>
            <ul>
              <li>
                <a href="#!">Sobre Nós</a>
              </li>
              <li>
                <a href="#!">Movimento</a>
              </li>
              <li>
                <a href="#!">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Ajuda</h3>
            <ul>
              <li>
                <a href="#!">Suporte</a>
              </li>
              <li>
                <a href="#!">Fale Conosco</a>
              </li>
              <li>
                <a href="#!">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Termos</h3>
            <ul>
              <li>
                <a href="#!">Termos e Condições</a>
              </li>
              <li>
                <a href="#!">Política de Privacidade</a>
              </li>
              <li>
                <a href="#!">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p className="footer-bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </footer>
  );
}

export default Footer;
