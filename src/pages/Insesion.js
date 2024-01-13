import React, { useState } from "react";
import "../styles/Insesion.css";
import email from "../assets/email.png";
import password from "../assets/password.png";
import name from "../assets/person.png";

export default function Insesion() {
  const [action, setAction] = useState("Registrarse");
  return (
    <div>
      <div className="background">
        <div className="container">
          <div className="header">
            <div className="texto">{action}</div>
          </div>
          <div className="inputs">
            {action === "Iniciar Sesión" ? (
              <div />
            ) : (
              <div className="input">
                <img src={name} alt="." />
                <input type="text" placeholder="Nombre" />
              </div>
            )}
            <div className="input">
              <img src={email} alt="." />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password} alt="." />
              <input type="password" placeholder="Contraseña" />
            </div>
            <div className="submit-container">
              <button
                className={action === "Registrarse" ? "boton-gris" : "boton"}
                onClick={() => {
                  setAction("Registrarse");
                }}
              >
                Registro
              </button>
              <button
                className={action === "Iniciar Sesión" ? "boton-gris" : "boton"}
                onClick={() => {
                  setAction("Iniciar Sesión");
                }}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
