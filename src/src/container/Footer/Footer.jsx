import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">La Empresa</h1>
        <p className="p__opensans_title">Razón Social:</p>
        <p className="p__opensans">QHAPAQ INNOVATIONS S.A.C.</p>
        <p className="p__opensans_title">RUC:</p>
        <p className="p__opensans">20611117052</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.qhapaqnav} alt="footer_logo" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiLinkedin />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Direccion</h1>
        <p className="p__opensans">
          CAL.5 MZA. B LOTE. 26 INT. 3 LOT. CAMPOY (TOTTUS CAMPOY) LIMA / LIMA /
          SAN JUAN DE LURIGANCHO
        </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 Qhapaq Innovations, todos los derechos reservados.
      </p>
    </div>
  </div>
);

export default Footer;
