import "./PartnersCard.scss";
import Button from "../Button/Button";

type Props = {};

function PartnersCard({}: Props) {
  return (
    <div className="cards-container">
      <div className="partners-card">
        <div className="content-wrapper">
          <h2 className="partners-title">Parceiros</h2>
          <p className="partners-text">
            Lorem ipsum dolor sit <br /> amet, consectetur
          </p>
          <Button className="tertiary-button" text="Confira" />
        </div>
      </div>
      <div className="partners-card">
        <div className="content-wrapper">
          <h2 className="partners-title">Parceiros</h2>
          <p className="partners-text">
            Lorem ipsum dolor sit <br /> amet, consectetur
          </p>
          <Button className="tertiary-button" text="Confira" />
        </div>
      </div>
    </div>
  );
}

export default PartnersCard;
