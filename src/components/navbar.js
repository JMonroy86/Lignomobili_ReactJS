import React from 'react';
import { Link, useLocation} from 'react-router-dom';


const Navbar = () => {
    let location = useLocation();
    let classItem = "";
    let classItem1 = "";
    let classItem2 = "";
    let classItem3 = "";
    if(location.pathname === "/"){
        classItem = "active";
    }
    else if(location.pathname === "/Nosotros"){
        classItem1 = "active";
    }
    else if(location.pathname === "/Servicios"){
        classItem3 = "active";
    }
    return (
        <header className="header fixed-top">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                <Link className="navbar-brand" to="/">
                    <img src="img/LOGO_CMP_LM.png" width="150" height="60" className="d-inline-block align-top" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto title">
                        <li className={"nav-item "+classItem}>
                            <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={"nav-item "+classItem1}>
                            <Link className="nav-link" to="/Nosotros">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Proyectos</Link>
                        </li>
                        <li className={"nav-item "+classItem3}>
                            <Link className="nav-link" to="/Servicios">Productos y Servicios</Link>
                        </li>
                    </ul>
                    <ul className="nav list-inline">
                        <li className="list-inline-item">
                            <a href="#"><i className="fab fa-facebook fa-fw fa-1x"></i></a>
                        </li>

                        <li className="list-inline-item">
                            <a href="#"><i className="fab fa-instagram fa-fw fa-1x"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;