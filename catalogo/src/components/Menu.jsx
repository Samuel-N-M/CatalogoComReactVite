/* eslint-disable no-unused-vars */
import React from "react";
import "../css/Menu.css"
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar">
            <div className="menu">
                <div className="container-logo"><Link className="logo" to="/"><span>Logo</span></Link></div>

                <div className="nav-items">
                    <Link to="/" className="nav-item">Início</Link>
                    <Link to="/categoria" className="nav-item">Categoria</Link>
                    <Link to="/marcas" className="nav-item">Marcas</Link>
                    <Link to="/sobre" className="nav-item">Sobre</Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu;