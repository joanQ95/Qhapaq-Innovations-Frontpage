import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_mision">
          <h1 className="headtext__cormorant">Misión</h1>
          <p className="p__opensans">
            Brindar servicios de calidad para incrementar la productividad,
            competitividad y seguridad de nuestros clientes, basados en nuestra
            experiencia, disponibilidad, tecnología y responsabilidad social.
          </p>
        </div>

        <div className="app__aboutus-content_logo flex__center">
          <img src={images.logov} alt="about_logo" />
        </div>
        <div className="app__aboutus-content_vision">
          <h1 className="headtext__cormorant">Visión</h1>
          <p className="p__opensans">
            Brindar servicios de calidad para incrementar la productividad,
            competitividad y seguridad de nuestros clientes, basados en nuestra
            experiencia, disponibilidad, tecnología y responsabilidad social.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
