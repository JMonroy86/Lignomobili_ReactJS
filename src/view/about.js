import React from 'react';
import Carousel from '../components/carousel';
import CarouselList from '../constants/carouselConstants'


const About = (props) => {
    return (
        <>
            <Carousel routeUrl={CarouselList.about} />
            <section id="about">
                <div class="container pt-5 pb-5">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <img src="img/logo_slogan.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                            <h3 class="display-4">¿Quienes somos?</h3>
                            <p class="text h5 text-justify pt-3">LIGNO MOBILI somos una marca respaldada por una sociedad
                            de empresarios con experiencia en el rubro de más de 50 años en la fabricación y desarrollo de
                            Mobiliario, proyectos para diferentes sectores (industrial, Comercial, financiero, salud, hotelero,
                                domestico, entre otros). Con presencia en Chile, Venezuela y República Dominicana.</p>
                            <p class="text h5 text-justify pt-3">En Chile, tenemos para manufactura una planta física en el área
                            Metropolitana de Santiago, con tecnología moderna (Control Numérico CNC), la cual garantiza calidad
                            y tiempo de respuesta. Disponemos de más de mil metros de almacenamiento para producto terminado,
                            servicios de instalaciones y transporte, lo cual nos permite ofrecer una excelente capacidad
                                logística a nuestros clientes.</p>
                            <p class="text h5 text-justify pt-3">Contamos con un equipo de trabajo multidisciplinarios
                            orientado al mejoramiento continuo, con ingenieros y arquitectos capacitados para desarrollar
                            proyectos óptimos y vanguardistas en sus espacios. Comprometidos en optimizar procesos y materiales
                                para proteger nuestra medio ambiente, buscando una relación Ganar – Ganar con nuestros Clientes y Aliados.</p>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                            <h3 class="display-4">Misión</h3>
                            <p class="text h5 text-justify">Proveer productos y servicios de alta calidad a los distintos
                            sectores económicos del país, con tiempos de respuesta oportunos y que satisfagan las necesidades
                                    de los Clientes.</p>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                            <h3 class="display-4">Visión</h3>
                            <p class="text h5 text-justify">Convertirnos en líderes en la fabricación de muebles en
                            Chile, ser reconocidos por la alta calidad en nuestros productos y buen servicio,
                            lo que nos conduzca a ser el principal proveedor de grandes empresas tanto del sector privado
                                        como público.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About;