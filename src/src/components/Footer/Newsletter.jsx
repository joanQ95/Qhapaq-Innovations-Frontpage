import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Qhapaq Innovations" />
      <h1 className="headtext__cormorant">Contactanos por estos medios</h1>
      <p className="p__opensans">Cuentanos tu idea</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Email" />
      <button className="custom__button">Enviar</button>
    </div>
  </div>
);

export default Newsletter;
