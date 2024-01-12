import React from "react";
import "../styles/Insesion.css";
import email from "../assets/email.png";
import password from "../assets/password.png";
import name from "../assets/person.png";

export default function Insesion() {
  return (
    <div>
      <div className="background">
      <div className="container">
        <div className="header">
          <div className="texto">Registrarse</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={name} />
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="input">
            <img src={email} />
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            <img src={password} />
            <input type="password" placeholder="Contraseña"/>
          </div>
          <div className="submit-container">
            <button>Registro</button>
            <button>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
