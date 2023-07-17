import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

import "./MenuTop.scss";

const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/newMovies">Últimos lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/popular">Películas populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Buscar película</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuTop;
