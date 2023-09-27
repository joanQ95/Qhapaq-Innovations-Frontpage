import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Bienvenido a la excelencia de la ingenieria" />
        <h1 className="app__header-h1">QHAPAQ INNOVATIONS</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Nuestra amplia experiencia nos permite llevar tus proyectos a un nivel
          superior, ofreciendo resultados altamente eficientes y cuidadosamente
          elaborados. Explora nuestra variada gama de servicios de ingeniería.
        </p>
        <button type="button" className="custom_button">
          Empecemos
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.fondo} alt="header_img"></img>
      </div>
    </div>
  );
};

export default Header;
