import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <header className="cabecera">
                <h1 className="cabecera-h1">
                    Javier Lamarque
                </h1>
                            {/* Icono del menu hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className="cabecera-button"><svg className="cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></button>

                                            {/**Evento para que aparezca y desaparzca el menu */}
                <nav className={`cabecera-nav ${menu ? 'isActive' : ''}`}>
                    <ul className="cabecera-ul">
                        <li className="cabecera-li"><NavLink component={Link} to='/'>Home</NavLink></li>
                        <li className="cabecera-li"><NavLink to='./contact'>Contacto</NavLink></li>
                        <li className="cabecera-li nav_carousel"><NavLink to='./product'>Carusel de Imagenes</NavLink></li>
                        <li className="cabecera-li"><NavLink to='./card'>Card de Imagenes</NavLink></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default NavBar;