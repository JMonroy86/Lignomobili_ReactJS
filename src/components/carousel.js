import React from 'react';
import CarouselList from '../constants/carouselConstants'

const Carousel = () => {
    let classItem = "";

    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    CarouselList.map((indicator, i) => {

                        return (
                            <li data-target="#carouselExampleIndicators" data-slide-to={i} className="active"></li>
                        )
                    })
                }
            </ol>
            <div className="carousel-inner mycarousel mycarrousel">
                {
                    CarouselList.map((img, i) => {
                        if (i === 0) {
                            classItem = "active";
                        }
                        else {
                            classItem = ""
                        }
                        return (
                            <div className={"carousel-item " + classItem}>
                                <img src={img} className="d-block" alt="..." />
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Carousel;