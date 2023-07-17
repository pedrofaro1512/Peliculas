import React from "react";
import { Layout } from "antd";

//Importación de estilo
import "./Footer.scss";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <p>Pedro Romero</p>
    </Footer>
  );
};

export default Footer;
