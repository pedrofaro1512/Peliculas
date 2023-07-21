import React from "react";
import { Layout } from "antd";

//Importación de imagenes
import linkedin from "../../assets/img/linkedin.jpg";
import github from "../../assets/img/github.jpg";
import behance from "../../assets/img/behance.jpg";

//Importación de estilo
import "./Footer.scss";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/pedro-fabian-romero-osorio-b77601116/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="socialIcon" />
        </a>
        <a
          href="https://github.com/pedrofaro1512"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" className="socialIcon" />
        </a>
        <a
          href="https://www.behance.net/pedroromero25"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="behance" className="socialIcon" />
        </a>
      </div>
      <div className="contact">
        <h2>Contáctame</h2>
        <p>Email: pedrofaro2711@gmail.com</p>
        <p>Bogotá - Colombia</p>
      </div>
    </Footer>
  );
};

export default Footer;
