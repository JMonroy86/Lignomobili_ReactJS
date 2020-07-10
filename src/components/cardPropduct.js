import React from 'react'
import Product from '../constants/propductsConstants'


const CardProduct = () => {
  return (
    <>
      {
        Product.map((item, i) => {
          return (
            <div className="col-md-3 p-2">
              <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <a className="" href={"/Productos/"+item.url}>Galería de imágenes</a>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default CardProduct;
