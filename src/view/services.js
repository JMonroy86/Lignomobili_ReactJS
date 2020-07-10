import React from 'react';
import Carousel from '../components/carousel';
import CarouselList from '../constants/carouselConstants'
import Chair from '../constants/chairsConstants'
import CardChair from '../components/cardChair';
import CardProduct from '../components/cardPropduct';


const Services = () => {
    return (
        <>
            <Carousel routeUrl={CarouselList.service} carouselVal="0" />
            <section className="parallax">
                <div className="container">
                    <div className="row">
                        <div className="jumbotron bg_jumbotron">
                            <h1 className="display-4">Oficina</h1>
                            <p className="lead">Ofrecemos diferentes líneas con diseños innovadores y de vanguardia para
                            optimizar sus espacios y necesidades, desarrollados con estándares calidad y ergonomía.</p>
                            <hr className="my-4" />
                            <Carousel routeUrl={CarouselList.office} carouselVal="1" />
                            <a className="btn btn-primary btn-lg mt-4" role="button" href="/Productos/Oficinas">Ver fotos</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products_services" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <CardProduct />
                    </div>
                </div>
            </section>

            <div id="sillas" className="container pt-2 pb-5">
                <h3 className="display-4 blue m-3">Sillas</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row p-2">
                                {
                                    Chair.map((item, i)=>{
                                        return(
                                            <CardChair key={i} chairItem = {item} />
                                        )
                                    })
                                }
                                <div className="col-lg-3 col-md-6 col-sm-12 pt-3 pb-3 m-3">
                                    <div className="col-12">
                                        <a className="text-decoration-none" href="/Productos/Sillas">
                                            <img src="img/ver_mas.png   " className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;