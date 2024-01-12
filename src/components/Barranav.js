import React from "react";
import logo from "../assets/logoparanav.png";
import "../styles/Barranav.css";

function Barranav() {
  return (
    <header className="Barranav">
      <img src={logo} className="logo" alt="Logo empresa"></img>
      <nav>
        <ul className="menu">
          <li>
            <a href="/login" class="btn btn-primary">Iniciar sesion</a>
          </li>
          <li>
            <a href="/hoteles" class="btn btn-primary">Hoteles</a>
          </li>
          <li>
            <a href="/nosotros" class="btn btn-primary">Sobre nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Barranav;
