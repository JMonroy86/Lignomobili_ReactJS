import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <section id="contac_form" className="pt-5 parallax2 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <section className="section">
                                <h1 className="section-heading text-left title">Contactanos</h1>
                                <div className="row">
                                    <div className="col-md-4 col-xl-4 pt-4">
                                        <form id="contact-form" name="contact-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="md-form">
                                                        <div className="md-form">
                                                            <input type="text" id="name" name="name" className="form-control" />
                                                            <label htmlFor="name" className="">Nombre</label></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="md-form">
                                                        <div className="md-form">
                                                            <input type="email" id="email" name="email" className="form-control" />
                                                            <label htmlFor="email" className="">Email</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <input type="text" id="subject" name="subject" className="form-control" />
                                                        htmlFor                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <input type="text" id="tel" name="tel" className="form-control" />
                                                        <label htmlFor="tel" className="">Telefono</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <textarea maxLength="500" id="message" name="message" className="form-control"></textarea>
                                                        <label htmlFor="message">Mensaje</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center-on-small-only pt-2">
                                                <div className="status pb-2" id="status">
                                                </div>
                                                <button type="submit" className="btn btn-primary">Enviar</button>
                                            </div>
                                            <br />
                                        </form>
                                    </div>
                                    <div className="col-md-5 col-xl-5">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.387970723754!2d-70.73090078519343!3d-33.33481259897202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c0af562cf561%3A0xf0832a1e41dc1794!2sCondominio%20Industrial%20Alto%20Portezuelo!5e0!3m2!1ses!2scl!4v1574301972294!5m2!1ses!2scl"
                                         width="100%" height="300" frameBorder="0" className="shadow-lg" style={{"borderRadius": "0.6rem"}}></iframe>
                                    </div>
                                    <div className="col-md-3 col-xl-3 pt-4 pb-4">
                                        <div className="container">
                                            <div className="row">
                                                <ul className="list-unstyled white">
                                                    <li>
                                                        <h3 className="text h5">Santiago. Región Metropolitana</h3>
                                                    </li>
                                                    <li>
                                                        <h3 className="text h5">Chile</h3>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-map-marker fa-fw fa-1x"></i>
                                                        <h3 className="text h6"> El Juncal 240, Centro Empresarial Alto Portezuelo,
                                                                            <br /> Bodega 20. Quilicura. Santiago</h3>
                                                    </li>
                                                    <li className="text">
                                                        <i className="fa fa-phone fa-fw fa-1x"></i>
                                                        <a className="text-decoration-none" href="tel:+56227596135">+56-2-27596135</a>
                                                    </li>
                                                    <li className="text">
                                                        <i className="fa fa-phone fa-fw fa-1x"></i>
                                                        <a className="text-decoration-none" href="tel:+56940935199">+56-9-4093-5199</a>
                                                    </li>
                                                    <li className="text"><i className="fab fa-whatsapp fa-fw fa-1x"></i>
                                                        <a className="text-decoration-none" href="https://wa.me/56961572484">+56-9-61572484</a>
                                                    </li>
                                                    <li className="text">
                                                        <i className="fa fa-envelope fa-fw fa-1x"></i>
                                                        <a href="mailto:ventas@lignomobili.cl">ventas@lignomobili.cl</a>
                                                    </li>
                                                    <li className="text">
                                                        <i className="fa fa-envelope fa-fw fa-1x"></i>
                                                        <a href="mailto:administracion@lignomobili.cl">administracion@lignomobili.cl</a>
                                                    </li>
                                                    <li className="list-inline-item pt-2">
                                                        <a href="https://www.facebook.com/lignomobili_-103682198064248/">
                                                            <i className=" text-white fab fa-facebook fa-fw fa-2x"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item pt-2">
                                                        <a href="https://www.instagram.com/lignomobili_/">
                                                            <i className=" text-white fab fa-instagram fa-fw fa-2x"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer;