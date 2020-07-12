import React from 'react'
import ProductsImg from '../constants/productsimgConstants';

const Products = props => {
  return (
    <>
      {
        props.match.params.id === "Proyectos" && (
          <div className="header_video">
            <div className="overlay">
            </div>
            <video playsinline="" autoplay="" loop="">
              <source src="../img/proyectos/render.mp4" type="video/mp4" />
            </video>
            <div className="container h-100">
              <div className="d-flex h-100 text-center align-items-center">
                <div className="w-100 text-white"><h1 className="display-3">Proyectos</h1>
                  <p className="lead mb-0">Desarrollamos con nuestro equipo de Arquitectos e ingenieros mobiliario que
                  realzan y generan soluciones con diseño vanguardista para los diferentes sectores (industrial,
                  construcción, comercial, hotelero, financiero, salud, domestico, entre otro)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12">
            <div className="gallery" id="gallery">
              {
                ProductsImg.map((prd) => {
                  return (
                    props.match.params.id === prd.name && (
                      prd.image.map((item, i) => {
                        console.log(true)
                        return (
                          <div key={i} className="mb-3 pics animation ">
                            <img className="img-fluid gImg" src={item} alt="Card cap" />
                          </div>
                        )
                      })
                    )
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div id="myModal" className="own_modal">
        <span className="close">&times;</span>
        <img className="own_modal-content" id="img01" />
        <div id="caption">hi</div>
      </div> */}
    </>
  )
}

export default Products
