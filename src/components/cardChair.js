import React from 'react';
import Carousel from '../components/carousel';

const CardChair = (props) => {
    console.log(props)
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mycard pt-3 pb-3 m-3">
            <div className="col-12">
                <img src={props.chairItem.mainPic} className="d-block w-100" alt="..." />
            </div>
            <div className="col-12 pt-2">
                <h1 className="mydisplay-4 blue">{props.chairItem.name}</h1
                ><hr />
                <p className="text">Colores:</p>
                <div className="row ">
                    {
                        props.chairItem !== null &&
                        (
                            props.chairItem.colors.map((classNameColor, i) => {
                                return (
                                    <>
                                        <div key={i} className="col-3">
                                            <a className="text-decoration-none" data-toggle="modal" data-target={"#" + classNameColor.target}>
                                                <div className={classNameColor.color}>
                                                </div>
                                            </a>
                                            <div className="modal fade" id={classNameColor.target} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered" role="document">
                                                    <div className="modal-content mx-auto" style={{ "width": "60%" }}>
                                                        <Carousel routeUrl={classNameColor.pic} carouselVal={i} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default CardChair;