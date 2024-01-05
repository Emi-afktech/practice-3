import React from 'react'
import logo  from '../assets/logoempresa.png'
import { BrowserRouter as Router, Link } from "react-router-dom"
import '../styles/Barranav.css'


function Barranav() {
  return (
    <div className='Barranav'>
        <div className='Izquierda'>
            <img src={logo} alt='Logo de la empresa'/>
       </div>
       <div className='Derecha'>
       </div>
       <Link to ="/">Inicio</Link>
       <Link to ="/">Registro</Link>
       <Link to ="/">Hoteles</Link>
    </div>
  )
}

export default Barranav