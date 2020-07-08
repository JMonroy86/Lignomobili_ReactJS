import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
            <section id="contac_form" class="pt-5 parallax2 text-white">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <section class="section">
                                <h1 class="section-heading text-left title">Contactanos</h1>
                                <div class="row">
                                    <div class="col-md-4 col-xl-4 pt-4">
                                        <form id="contact-form" name="contact-form">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="md-form">
                                                        <div class="md-form">
                                                            <input type="text" id="name" name="name" class="form-control" />
                                                            <label for="name" class="">Nombre</label></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="md-form">
                                                        <div class="md-form">
                                                            <input type="email" id="email" name="email" class="form-control" />
                                                            <label for="email" class="">Email</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="md-form">
                                                        <input type="text" id="subject" name="subject" class="form-control" />
                                                        <label for="subject" class="">Asunto</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="md-form">
                                                        <input type="text" id="tel" name="tel" class="form-control" />
                                                        <label for="tel" class="">Telefono</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="md-form">
                                                        <textarea maxlength="500" id="message" name="message" class="form-control"></textarea>
                                                        <label for="message">Mensaje</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="center-on-small-only pt-2">
                                                <div class="status pb-2" id="status">
                                                </div>
                                                <button type="submit" class="btn btn-primary">Enviar</button>
                                            </div>
                                            <br />
                                        </form>
                                    </div>
                                    <div class="col-md-5 col-xl-5">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.387970723754!2d-70.73090078519343!3d-33.33481259897202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c0af562cf561%3A0xf0832a1e41dc1794!2sCondominio%20Industrial%20Alto%20Portezuelo!5e0!3m2!1ses!2scl!4v1574301972294!5m2!1ses!2scl"
                                         width="100%" height="300" frameborder="0" class="shadow-lg" style={{"border-radius": "0.6rem"}}></iframe>
                                    </div>
                                    <div class="col-md-3 col-xl-3 pt-4 pb-4">
                                        <div class="container">
                                            <div class="row">
                                                <ul class="list-unstyled white">
                                                    <li>
                                                        <h3 class="text h5">Santiago. Región Metropolitana</h3>
                                                    </li>
                                                    <li>
                                                        <h3 class="text h5">Chile</h3>
                                                    </li>
                                                    <li>
                                                        <i class="fa fa-map-marker fa-fw fa-1x"></i>
                                                        <h3 class="text h6"> El Juncal 240, Centro Empresarial Alto Portezuelo,
                                                                            <br /> Bodega 20. Quilicura. Santiago</h3>
                                                    </li>
                                                    <li class="text">
                                                        <i class="fa fa-phone fa-fw fa-1x"></i>
                                                        <a class="text-decoration-none" href="tel:+56227596135">+56-2-27596135</a>
                                                    </li>
                                                    <li class="text">
                                                        <i class="fa fa-phone fa-fw fa-1x"></i>
                                                        <a class="text-decoration-none" href="tel:+56940935199">+56-9-4093-5199</a>
                                                    </li>
                                                    <li class="text"><i class="fab fa-whatsapp fa-fw fa-1x"></i>
                                                        <a class="text-decoration-none" href="https://wa.me/56961572484">+56-9-61572484</a>
                                                    </li>
                                                    <li class="text">
                                                        <i class="fa fa-envelope fa-fw fa-1x"></i>
                                                        <a href="mailto:ventas@lignomobili.cl">ventas@lignomobili.cl</a>
                                                    </li>
                                                    <li class="text">
                                                        <i class="fa fa-envelope fa-fw fa-1x"></i>
                                                        <a href="mailto:administracion@lignomobili.cl">administracion@lignomobili.cl</a>
                                                    </li>
                                                    <li class="list-inline-item pt-2">
                                                        <a href="https://www.facebook.com/lignomobili_-103682198064248/">
                                                            <i class=" text-white fab fa-facebook fa-fw fa-2x"></i>
                                                        </a>
                                                    </li>
                                                    <li class="list-inline-item pt-2">
                                                        <a href="https://www.instagram.com/lignomobili_/">
                                                            <i class=" text-white fab fa-instagram fa-fw fa-2x"></i>
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