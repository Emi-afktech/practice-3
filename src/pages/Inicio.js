import React from "react";
import "../styles/Inicio.css";
import Hero from "../components/Hero";

function Inicio() {
  return (
    <div className="estiloini">
      <Hero/>
      <div className="sobreimagen">
        <h1>Bienvenido a Entierrelpre</h1>
        <h2>Siempre buscando los mejores precios para usted.</h2>
      </div>
    </div>
  );
}

export default Inicio;
