import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { getCurrentUser } from '../services/ServicioAuth';

export function Header() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    const CerrarSesion = () => {
        var URLactual = window.location;
        localStorage.clear();
        window.location = URLactual;
    }

    return (
        <>
            <nav className="navbar fixed-top sticky-top navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <div className="col-2">
                        <Link className="navbar-brand" to="#">
                            Proyecto Grupo 11
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            {user && (
                                <>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Ventas
                                </Link>                                
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/registrarVenta">Registrar Venta</Link></li>
                                    <li><Link className="dropdown-item" to="/estadoVenta">Estado Venta</Link></li>
                                </ul>                                
                            </li>
                            </>)}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Producto">Productos</Link>
                            </li>
                            {user && (
                                <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Usuarios</Link>
                            </li>
                            </>)}
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {!user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="Registro">Registrarse</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="IniciarSesion">Iniciar Sesion</Link>
                                    </li>
                                </>)}
                            {user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => CerrarSesion()}>Cerrar Sesion</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <br />
        </>
    );
}

export default Header;