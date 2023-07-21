import React from "react";
import { Link } from "react-router-dom";

import "./error404.scss";

const Error404 = () => {
  return (
    <div className="error404">
      <h2>Error404</h2>
      <h1>Página no encontrada</h1>
      <Link to="/">
        <h3>Volver al inició</h3>
      </Link>
    </div>
  );
};

export default Error404;
