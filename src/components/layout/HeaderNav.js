import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>F</span>
            <h3>Feli Rubio WEB</h3>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/inicio" 
                  className={({isActive}) => isActive ? "active" : "" }>
                  Inicio
                </NavLink></li>


                <li><NavLink className={({isActive}) => isActive ? "active" : "" } to="/servicios">Servicios</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active" : "" } to="/portafolio">Portafolio</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active" : "" } to="/curriculum">Curriculum</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active" : "" } to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
