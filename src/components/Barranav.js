import React from 'react'
import logo  from '../assets/logoempresa.png'
import { Link } from "react-router-dom"

function Barranav() {
  return (
    <div className='Barranav'>
        <div className='Izquierda'>
            <img src={logo}/>
       </div>
       <div className='Derecha'>
       </div>
       <Link to="/">Inicio</Link>
       <Link to="/">Registro</Link>
       <Link to="/">Hoteles</Link> 
       
    </div>
  )
}

export default Barranav