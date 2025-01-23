import "./App.scss";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";

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
              <Button text="Ver produto"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
