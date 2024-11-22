/* eslint-disable no-unused-vars */
import React from "react";
import "../css/Menu.css"

function Menu() {
    return (
        <nav className="navbar">
            <div className="menu">
                <div className="container-logo"><a className="logo" href="#"><span>Logo</span></a></div>

                <div className="nav-items">
                    <a href="#" className="nav-item">Início</a>
                    <a href="#" className="nav-item">Comparações</a>
                    <a href="#" className="nav-item">Marcas</a>
                    <a href="#" className="nav-item">Sobre</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu