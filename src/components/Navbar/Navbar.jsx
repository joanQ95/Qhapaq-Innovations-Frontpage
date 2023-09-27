import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.qhapaqnav} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Inicio</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Nosotros</a>
        </li>
        <li className="p__opensans">
          <a href="#services">Servicios</a>
        </li>
        <li className="p__opensans">
          <a href="#clients">Clientes</a>
        </li>
        <li className="p__opensans">
          <a href="#brands">Marcas</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <TiThMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Inicio</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Nosotros</a>
              </li>
              <li className="p__opensans">
                <a href="#services">Servicios</a>
              </li>
              <li className="p__opensans">
                <a href="#clients">Clientes</a>
              </li>
              <li className="p__opensans">
                <a href="#brands">Marcas</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
