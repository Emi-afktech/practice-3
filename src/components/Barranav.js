import React from "react";
import logo from "../assets/logoparanav.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/Barranav.css";

function Barranav() {
  return (
    <header className="Barranav">
      <img src={logo} className="logo" alt="Logo empresa"></img>
      <nav>
        <ul className="menu">
          <li>
            <a href="/login">Iniciar sesion</a>
          </li>
          <li>
            <a href="/hoteles">Hoteles</a>
          </li>
          <li>
            <a href="/nosotros">Sobre nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Barranav;
