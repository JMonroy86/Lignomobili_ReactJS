import React from 'react';
import Carousel from '../components/carousel';
import CarouselList from '../constants/carouselConstants'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Carousel routeUrl={CarouselList.home}/>
            <div className="container pt-5 pb-5" id="products">
                <h1 className="display-4 blue">Productos y Servicios</h1>
                <div className="row pt-4">
                    <div className="col-md-6">
                    <Link className="text-decoration-none" to="/">
                        <div className="card shadow-lg border-primary mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-12">
                                    <img src="../img/cocinas/5760.jpg" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title title blue">Cocinas</h5>
                                        <hr />
                                        <p className="card-text text mycard-text">Creamos diseños para hacer de este espacio un ambiente
                                        elegante y funcional para que usted comparta con sus familiares y amistades. Disfrutaras
                                        de productos de alta calidad, buen gusto y accesorios novedosos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-6">
                    <Link className="text-decoration-none" to="/">
                        <div className="card shadow-lg border-primary mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-12">
                                    <img src="../img/closet_vestier/5760.jpg" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title title blue">Closet y Vestier</h5>
                                        <hr />
                                        <p className="card-text text mycard-text">En la intimidad de su Hogar, evaluamos sus necesidades de almacenaje para crear una 
                                        experiencia placentera al vestirse. Soluciones a su medida, tecnología, variedad de materiales, herrajes 
                                        e iluminación de última tendencia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                    <Link className="text-decoration-none" to="/">
                        <div className="card shadow-lg border-primary mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="../img/conference/5764.jpg" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title title blue">Mobiliario de Oficina</h5>
                                        <hr />
                                        <p className="card-text text mycard-text">Ofrecemos diferentes líneas 
                                        con diseños innovadores y de vanguardia para optimizar sus espacios y necesidades, 
                                        desarrollados con estándares calidad y ergonomía.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                    <Link className="text-decoration-none" to="/">
                        <div className="card shadow-lg border-primary mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="../img/sillas/silla1/5759.jpg" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title title blue">Sillas</h5>
                                        <hr />
                                        <p className="card-text text mycard-text">Tenemos para Usted, 
                                        sillas para su empresa y hogar con tendencia ergonómica de alta calidad y 
                                        garantías de 3 años. Con excelente relación precio/valor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className="col-md-12">
                        <div className="header_video">
                            <div className="overlay"></div>
                            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                                <source src="img/proyectos/SIN-MIDWAY.mp4" type="video/mp4" />
                            </video>
                            <div className="container h-100">
                                <div className="d-flex h-100 text-center align-items-center">
                                    <div className="w-100 text-white">
                                        <h1 className="display-3">Proyectos</h1>
                                        <p className="lead mb-0">Desarrollamos con nuestro equipo de Arquitectos en ingenieros
                                        productos y ambientes que realzan y generan soluciones con diseño vanguardista para los diferentes sectores
                                    (industrial, comercial, hotelero, financiero, salud, domestico, entre otro).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="my-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="card d-block" style={{ "width": "300px" }}>
                                        <a href="./catalogo.pdf" target="_blank" className="link-unstyled" download="./catalogo.pdf">
                                            <img src="img/descarga.png" className="card-img-top img-fluid w-10 myimg" alt="..." />
                                            <div className="card-body text-center d-block">
                                                <h5 className="card-title mydisplay-5">Download</h5>
                                                <h5 className="card-title mydisplay-4">Broshure</h5>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;