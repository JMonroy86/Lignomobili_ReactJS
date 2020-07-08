import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header class="header fixed-top">
            <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                <Link class="navbar-brand" to="/">
                    <img src="img/LOGO_CMP_LM.png" width="150" height="60" class="d-inline-block align-top" alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto title">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="about.html">Nosotros</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="servicios.html">Productos y Servicios</Link>
                        </li>
                    </ul>
                    <ul class="nav list-inline">
                        <li class="list-inline-item">
                            <a href="#"><i class="fab fa-facebook fa-fw fa-1x"></i></a>
                        </li>

                        <li class="list-inline-item">
                            <a href="#"><i class="fab fa-instagram fa-fw fa-1x"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;