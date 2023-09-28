import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import "./FindUs.css";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Redes Sociales" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Encuentranos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans_title">Correo Electronico </p>
        <p className="p__opensans">miguel.sarmiento@qhapaq-innovations.com</p>
        <p className="p__opensans_title">Telefono: </p>
        <p className="p__opensans">922347532</p>
      </div>

      <div className="app__contact-links_icons">
        <a href="https://www.instagram.com/silviovalenciaoficial/?hl=es-la">
          <FiFacebook />
        </a>
        <FiInstagram />
        <FiLinkedin />
        <a href="https://wa.link/4dnjdr">
          <BsWhatsapp />
        </a>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.fondo} alt="findus" />
    </div>
  </div>
);

export default FindUs;
